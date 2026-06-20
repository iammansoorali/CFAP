import { useDashboardData } from '../../hooks/useDashboardData';
export default function DashboardPage(){const data=useDashboardData();return <div>{data.health}</div>;}