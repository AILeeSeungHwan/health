// 계산기 위젯 디스패처
import Bmi from './Bmi'
import Bmr from './Bmr'
import DailyProtein from './DailyProtein'
import WaterIntake from './WaterIntake'
import SleepDebt from './SleepDebt'

const MAP = {
  'bmi': Bmi,
  'bmr': Bmr,
  'daily-protein': DailyProtein,
  'water-intake': WaterIntake,
  'sleep-debt': SleepDebt,
}

export default function CalculatorWidget({ calculator }) {
  if (!calculator) return null
  const Comp = MAP[calculator]
  if (!Comp) return <div style={{ padding:16, background:'#FEF2F2', borderRadius:8, color:'#B91C1C' }}>계산기 구현 예정: {calculator}</div>
  return <Comp />
}
