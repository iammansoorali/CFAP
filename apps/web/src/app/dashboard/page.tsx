import { HeroCard } from '../../components/HeroCard';
import { PlanetHealthCard } from '../../components/PlanetHealthCard';
import { TerraCard } from '../../components/TerraCard';

export default function DashboardPage(){
 return <div><HeroCard username='Mansoor' preventedCO2={420} treesEquivalent={19}/><PlanetHealthCard health='Healthy' improvement={18}/><TerraCard message='Small actions become lifelong habits.'/></div>;
}
