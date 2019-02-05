import React from 'react';
import '../../css/GraphCard.css'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from 'recharts';

const data = [
    {name: 'Page A', pv: 2400, amt: 2400},
    {name: 'Page B', pv: 1398, amt: 2210},
    {name: 'Page C', pv: 5800, amt: 2290},
    {name: 'Page D', pv: 3908, amt: 2000},
    {name: 'Page E', pv: 4800, amt: 2181},
    {name: 'Page F', pv: 3800, amt: 2500},
    {name: 'Page G', pv: 4300, amt: 2100},
];

const HbarChart = (props) => (
    <div className="graphcard">
       <BarChart width={400} height={300} data={props.data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}
            barCategoryGap='2%'
            barSize={9}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name" tick={false} label={{}}/>
       <YAxis label={{}}/>
       <Tooltip/>
       <Bar dataKey="Sales" stackId="a" fill="#8884d8" barSize='1'>
       {
       props.data.filter(obj => obj.Sales > 0).map((entry, index, color) => <Cell className='piece' fill={entry.color} stroke={entry.color}></Cell>)
       }
       </Bar>
      </BarChart>

      <ul className='label'>
       {props.data.filter((entry,index) => (index < 18)).filter(obj => obj.Sales > 0).map((entry) => 
            (
                <li className='info'>
                    <p className='name'>{entry.name}</p> 
                    <div style={{background : entry.color, height: '.5em', width: '.5em', marginTop: '.4em', marginLeft: 'auto'}}></div>
                </li>
            )
            )
        }
       </ul>
       <ul className='label'>
       {props.data.filter((entry,index) => (index >= 18)).filter(obj => obj.Sales > 0).map((entry) => 
            (
                <li className='info'>
                    <p className='name'>{entry.name}</p> 
                    <div style={{background : entry.color, height: '.5em', width: '.5em', marginTop: '.4em', marginLeft: 'auto'}}></div>
                </li>
            )
            )
        }
       </ul>
    </div>
);

export default HbarChart;