import React from 'react';
import PropTypes from 'prop-types';

export default function MetricView(props) {

//  var metrics = [{aggressive: 5, dead: 6, inside: 30000}];

  //console.log(props.speaker_metrics);

  const result = Object.keys(props.speaker_metrics).map((speaker_id, index) =>
    (<div className="column">
        <div className="base--button" style={{
          minHeight: '100px',
        }}>
          <input  style={{ minHieght: '100px', textAlign: 'center', border: 'none' ,outline: 'none'
}}  value={'Speaker: ' + speaker_id}/>

          {/*     Speaker: {speaker_id}{" "}{Object.keys(props.speaker_metrics[speaker_id]).map((metric_name, i) =>
//   (<span>{metric_name}{"-"}{props.speaker_metrics[speaker_id][metric_name]}{" "}</span>)
// )}
*/}

      </div>
    </div>));



  return <div className="flex setup">{result}</div>
}




MetricView.propTypes = {
  speaker_metrics: PropTypes.object.isRequired, // eslint-disable-line
};
