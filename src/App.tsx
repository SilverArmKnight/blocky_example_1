import 'bootstrap/dist/css/bootstrap.min.css';
import { BlocklyWorkspace } from 'react-blockly';
import { Card } from 'react-bootstrap';
import { DEFAULT_OPTIONS, getDefaultToolbox } from './blockly';
import './styles.css';

const toolbox = getDefaultToolbox();

export default function App() {
  return (
    <Card className="vh-100 vw-100">
      <Card.Header>
        <Card.Title>Blockly Playground</Card.Title>
        <Card.Body className="m-0 p-0">
          <BlocklyWorkspace className="blockly-editor" toolboxConfiguration={toolbox} workspaceConfiguration={DEFAULT_OPTIONS} initialXml={''} />
        </Card.Body>
      </Card.Header>
    </Card>
  );
}
