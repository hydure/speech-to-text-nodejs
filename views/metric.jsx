import React from 'react';
import PropTypes from 'prop-types';

export default function MetricView(props) {

//  var metrics = [{aggressive: 5, dead: 6, inside: 30000}];

  //console.log(props.speaker_metrics);

  const result = Object.keys(props.speaker_metrics).map((speaker_id, index) =>
    (<div>Speaker: {speaker_id}{" "}{Object.keys(props.speaker_metrics[speaker_id]).map((metric_name, i) =>
    (<span>{metric_name}{"-"}{props.speaker_metrics[speaker_id][metric_name]}{" "}</span>)
  )}</div>));



  return <div>{result}</div>
}




MetricView.propTypes = {
  speaker_metrics: PropTypes.array.isRequired, // eslint-disable-line
};
