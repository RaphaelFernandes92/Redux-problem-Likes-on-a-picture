export default function(alerts = 0, action) {
  
  if(action.type === 'increasealerts') {
    var newAlerts = alerts + 1;
    return newAlerts;
  } else {
    return alerts;
  }
  
}