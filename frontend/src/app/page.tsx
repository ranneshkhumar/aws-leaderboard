'use client';

import React, { useState, useEffect } from 'react';
import { LeaderboardModal } from '../components/LeaderboardModal';
import { LeaderboardApiService } from '../services/leaderboard.api';
import { LeaderboardMeResponseDto } from '../types/leaderboard.types';

// Valid JWT Developer Token generated for Arun Kumar (ID: 77614121-21f2-475f-a15d-67a8e89daf8a)
const DEV_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3NzYxNDEyMS0yMWYyLTQ3NWYtYTE1ZC02N2E4ZTg5ZGFmOGEiLCJlbWFpbCI6ImFydW5AdGVzdC5jb20iLCJpYXQiOjE3ODE3OTg4MDAsImV4cCI6MTgxMzMzNDgwMH0.VVO8tI3Rx-4UIDKPTpNiavgw5m8XxpUKr2IG7w-QKYo';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LeaderboardDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userStats, setUserStats] = useState<LeaderboardMeResponseDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiService = React.useMemo(() => new LeaderboardApiService(API_BASE_URL), []);

  // Fetch current user stats for the dashboard preview
  useEffect(() => {
    async function loadMe() {
      setLoading(true);
      setError(null);
      try {
        const stats = await apiService.getMe(DEV_TOKEN);
        setUserStats(stats);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Failed to connect to the backend API.');
      } finally {
        setLoading(false);
      }
    }
    loadMe();
  }, [apiService]);

  return (
    <div className="min-h-screen bg-aws-navy text-gray-200 flex flex-col font-sans selection:bg-aws-orange selection:text-aws-navy">
      {/* 1. Header Navigation Bar */}
      <header className="border-b border-aws-navy-border/60 bg-aws-navy-light/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* AWS Logo Symbol */}
            <div className="w-10 h-10 bg-aws-orange text-aws-navy font-black text-xl rounded-xl flex items-center justify-center shadow-lg shadow-aws-orange/15">
              a
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-gray-100 uppercase tracking-widest leading-none">
                AWS Academy
              </h1>
              <p className="text-[9px] font-bold text-aws-orange uppercase tracking-wider mt-1">
                Learning Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="h-4 w-px bg-aws-navy-border/60 hidden sm:inline" />
            <div className="flex items-center gap-2.5">
              {/* User Avatar */}
              <div className="w-8 h-8 rounded-lg bg-aws-navy-border border border-aws-navy-border flex items-center justify-center text-xs font-bold text-aws-orange uppercase">
                {userStats ? userStats.name.substring(0, 2) : 'AK'}
              </div>
              <div className="hidden sm:block text-left leading-none">
                <span className="text-xs font-bold text-gray-200 block">
                  {userStats ? userStats.name : 'Arun Kumar'}
                </span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5 block">
                  Enthusiast
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Dashboard Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center">
        {/* Welcome Section */}
        <div className="w-full max-w-3xl text-center space-y-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-100 uppercase tracking-wider">
            Expand Your Cloud Expertise
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Complete learning modules, solve interactive quizzes, and earn Cloud Credits to climb the rankings.
          </p>
        </div>

        {/* Feature Dashboard Card */}
        <div className="w-full max-w-2xl bg-gradient-to-b from-aws-navy-light to-aws-navy-light/40 border border-aws-navy-border/80 rounded-2xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -left-20 -top-20 w-44 h-44 bg-aws-orange/5 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-aws-orange/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-6">
            {/* Big Trophy Circle */}
            <div className="w-16 h-16 rounded-full bg-aws-orange/10 border border-aws-orange/30 flex items-center justify-center text-3xl shadow-lg shadow-aws-orange/5 animate-pulse">
              🏆
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase font-black tracking-widest text-aws-orange bg-aws-orange/10 px-3 py-1 rounded-full">
                Active Event
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-100 uppercase tracking-wide">
                Cloud practitioner league
              </h3>
            </div>

            {/* Sub-Card showing live API status */}
            <div className="w-full max-w-md bg-aws-navy/60 border border-aws-navy-border/50 rounded-xl p-4 flex items-center justify-between">
              {loading ? (
                <div className="w-full flex items-center justify-center gap-2 py-2">
                  <div className="w-4 h-4 border-2 border-aws-orange border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Connecting to platform...
                  </span>
                </div>
              ) : error ? (
                <div className="w-full flex items-center justify-between text-left">
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-bold text-red-400">Offline Integration Mode</p>
                    <p className="text-[10px] text-gray-500 mt-0.5 truncate">
                      NestJS server at {API_BASE_URL} is currently unreachable.
                    </p>
                  </div>
                  <span className="flex-shrink-0 bg-red-950/40 text-red-400 text-[8px] font-bold px-2 py-1 rounded border border-red-900/30 uppercase tracking-wider">
                    Offline
                  </span>
                </div>
              ) : userStats ? (
                <>
                  <div className="text-left">
                    <span className="text-[9px] font-bold text-aws-orange uppercase tracking-wider">
                      Your Stats
                    </span>
                    <h4 className="font-extrabold text-sm text-gray-200">
                      {userStats.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Cloud Credits: <span className="text-aws-orange font-bold">{userStats.cloudCredits}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">
                      Current Rank
                    </span>
                    <span className="text-xl font-black text-aws-orange">
                      #{userStats.rank}
                    </span>
                  </div>
                </>
              ) : null}
            </div>

            {/* Open Leaderboard Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full max-w-sm py-3 px-6 bg-aws-orange hover:bg-aws-orange-hover text-aws-navy font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg shadow-aws-orange/20 hover:shadow-aws-orange/30 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Open Leaderboard
            </button>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="border-t border-aws-navy-border/60 bg-aws-navy-light/20 py-6 text-center text-xs text-gray-500 font-medium uppercase tracking-wider">
        © 2026 AWS Roadmap Learning Academy. All rights reserved.
      </footer>

      {/* 4. Leaderboard Dialog Modal */}
      <LeaderboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        token={DEV_TOKEN}
        apiBaseUrl={API_BASE_URL}
      />
    </div>
  );
}
