import { HeroCard } from '../../components/HeroCard';
import { PlanetHealthCard } from '../../components/PlanetHealthCard';
import { TerraCard } from '../../components/TerraCard';
import { MissionCard } from '../../components/MissionCard';
import { ProgressRing } from '../../components/ProgressRing';
import { HabitHeatmap } from '../../components/HabitHeatmap';
import { AchievementCard } from '../../components/AchievementCard';
import { GardenCard } from '../../components/GardenCard';
import { WrappedCard } from '../../components/WrappedCard';

export default function DashboardPage(){
 return <div><HeroCard username='Mansoor' preventedCO2={420} treesEquivalent={19}/><PlanetHealthCard health='Healthy' improvement={18}/><MissionCard title='Become an Eco Warrior' progress={62}/><TerraCard message='Small actions become lifelong habits.'/><ProgressRing progress={62}/><HabitHeatmap/><AchievementCard/><GardenCard/><WrappedCard/></div>;
}