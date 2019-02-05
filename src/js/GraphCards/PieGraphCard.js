import React from 'react';
import {PieChart,Pie,Cell,Tooltip} from 'recharts';
import '../../css/GraphCard.css'

const PieGraphCard = (props) => (
    <div className="graphcard">
        <div>
            <PieChart width={280} height={280}>
            <Tooltip/>
                <Pie 
                data={props.data} 
                dataKey="Sales"
                cx="50%"
                cy="50%" 
                innerRadius={50} 
                outerRadius={120} 
                fill="#82ca9d" 
                animationDuration={1000} 
                animationBegin={50}
                animationEasing={"ease"}
                paddingAngle={0}
                >
                {
                props.data.filter(obj => obj.Sales > 0).map((entry, index, color) => <Cell className='piece' fill={entry.color} stroke={entry.color}></Cell>)
                }
                </Pie>
            </PieChart>
       </div>
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

export default PieGraphCard;