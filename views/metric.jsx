import React from 'react';
import PropTypes from 'prop-types';

export default function MetricView(props) {

//  var metrics = [{aggressive: 5, dead: 6, inside: 30000}];

  //console.log(props.speaker_metrics);
  //
  /*var updateInput = function(event){
    this.setState({name_input : event.target.value});
  };
  updateInput = updateInput.bind(this);*/

  const result = Object.keys(props.speaker_metrics).map((speaker_id, index) =>
    (<div className="row">
        <div className="base--button" style={{
          minHeight: '100px', borderColor: props.speaker_metrics[speaker_id]['aggressive'] > 0 ? 'red' : 'purple',
        }}>

          {console.log(props.speaker_metrics[speaker_id].lastSpoken)}

          {props.speaker_metrics[speaker_id].lastSpoken >= 120 ? "User haven't said anything in a while" : ""}
          
          <input style={{ minHeight: '100px', textAlign: 'center', border: 'none' ,outline: 'none'
}} onKeyPress={
            (e) => {
                //this.updateInput(e);
                if (e.key === 'Enter') {
                    console.log();
                    props.onSpeakerNameChange(speaker_id, "placeholder"/* TODO: determine how to get input value */);
                }
            }
          }/>

          {/*     Speaker: {speaker_id}{" "}{Object.keys(props.speaker_metrics[speaker_id]).map((metric_name, i) =>
//   (<span>{metric_name}{"-"}{props.speaker_metrics[speaker_id][metric_name]}{" "}</span>)
// )}
*/}

      </div>
    </div>));

  return <div style={{flexDirection: 'column', padding: '50px'}}>{result}</div>
}




MetricView.propTypes = {
  speaker_metrics: PropTypes.object.isRequired, // eslint-disable-line
  onSpeakerNameChange: PropTypes.func.isRequired,
};
