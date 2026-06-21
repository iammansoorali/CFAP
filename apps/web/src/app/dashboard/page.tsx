"use client";

import PageTransition from "../../components/PageTransition";
import AnimatedCard from "../../components/AnimatedCard";
import ThemeToggle from "../../components/ThemeToggle";
import EcoStreakWidget from "../../components/EcoStreakWidget";
import ImpactSummary from "../../components/ImpactSummary";
import AchievementsTimeline from "../../components/AchievementsTimeline";
import ProfileBadges from "../../components/ProfileBadges";
import CarbonTrendChart from "../../components/CarbonTrendChart";
import MonthlyChart from "../../components/MonthlyChart";
import YearlyChart from "../../components/YearlyChart";

export default function DashboardPage() {
  return (
    <PageTransition>
      <div>
        <h1>🌍 CarbonWise Dashboard</h1>
        <ThemeToggle />
        <AnimatedCard><EcoStreakWidget /></AnimatedCard>
        <AnimatedCard><ImpactSummary /></AnimatedCard>
        <AnimatedCard><AchievementsTimeline /></AnimatedCard>
        <AnimatedCard><ProfileBadges /></AnimatedCard>
        <AnimatedCard><CarbonTrendChart /></AnimatedCard>
        <AnimatedCard><MonthlyChart /></AnimatedCard>
        <AnimatedCard><YearlyChart /></AnimatedCard>
      </div>
    </PageTransition>
  );
}