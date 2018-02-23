import React, {Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

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

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={120} data={props.data}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
}