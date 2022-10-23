import report from './report/ReportDashboard'
import ReactDOM from 'react-dom/client'

function UserGreeting(props) {
    return <h1>Welcomes back!</h1>;
  }
  
  function ConditionalRender(props) {
    const themeInput = props.themeInput;
    const ComponentToRender =report;
    if (themeInput) {
        return <ComponentToRender/>;
    }
    return <UserGreeting />;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  // Try changing to isLoggedIn={true}:
  root.render(<ConditionalRender themeInput={true} />);
  export default ConditionalRender;