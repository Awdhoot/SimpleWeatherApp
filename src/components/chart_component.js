import _ from 'lodash';
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

// export default class ChartComponent extends Component {
//   render() {
//     console.log(props);
//     return (
//       <Sparklines width={props.width} height={props.height} data={props.data}>
//         <SparklinesLine color={props.color}/>
//       </Sparklines>
//     )
//   }
//
// }

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  const avg = props.data && props.data.reduce((sum, element) => {sum += element; return sum},0);
  console.log('avg -> ', avg / props.data.length);
  return (
    <div>
      <Sparklines svgHeight={90} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className={`text-center ${props.textColor}`}>
        <b>{average(props.data)} {props.units}</b>
      </div>
    </div>
  );
}