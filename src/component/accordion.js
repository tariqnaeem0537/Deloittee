import React, { Component } from "react";
import { Panel, PanelGroup } from "react-bootstrap";


    let activeKey = "1";
   
  function handleSelect() {
    activeKey = !(val);
  }


  const AccordionCtrl = (props) => {
    return (
            
              <PanelGroup
        accordion
        id="accordion-controlled-example"
        activeKey={activeKey}
        onSelect={handleSelect}
      >
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>Panel heading 1</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>Panel content 1</Panel.Body>
        </Panel>
      </PanelGroup> 
    )
  }

  export default AccordionCtrl;

  render() {
    return (
      <PanelGroup
        accordion
        id="accordion-controlled-example"
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect}
      >
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>Panel heading 1</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>Panel content 1</Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>Panel heading 2</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>Panel content 2</Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}

render(<App />, document.getElementById("root"));
