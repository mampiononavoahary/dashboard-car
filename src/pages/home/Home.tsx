import { BarChartBox } from "../../components/barChartBox/BarChartBox"
import { BigChartBox } from "../../components/bigChartBox/BigChartBox"
import { ChartBox } from "../../components/chartBox/ChartBox"
import { PieChartBox } from "../../components/pieChartBox/PieChartBox"
import { TopBox } from "../../components/topBox/TopBox"
import { ChartBoxConversion, ChartBoxProduct, ChartBoxRevenue, ChartBoxUser, barChartBoxRevenue, barChartBoxVisit } from "../../data"
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox {...ChartBoxUser}/></div>
      <div className="box box3"><ChartBox {...ChartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...ChartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...ChartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}
