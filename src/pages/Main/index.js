import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import {  FaBars } from 'react-icons/fa';

import { ToggleButton, Sidebar, Header, Content, Footer, Container, CalendarContainer} from './styles';

export default class Main extends Component {
  state = {
    sidebarState: true,
    width: 200
  };

 handleSidebar = (sidebarState) => {
      
      if(sidebarState === true){
        this.setState({
                        sidebarState: false,
                        width: 0
                      });
      }
      else{
        this.setState({
                        sidebarState: true,
                        width: 200
                      });
      }
 }

 render(){
    const { sidebarState, width } = this.state;

    return (
        <> 
          
          <Sidebar style={{width}}>
            <a href="#" style={{marginLeft: (width - 200)}}>About</a>
          </Sidebar>

          <Container style={{marginLeft: width}}>
            <Header>
              <ToggleButton onClick ={() => this.handleSidebar(sidebarState)}>
                <FaBars color="#fff"/>
              </ToggleButton>
            </Header>

            <Content>
              <div className="column side">Column</div>

              <div className="column middle">
                <CalendarContainer>
                  <FullCalendar
                    style={{width: 200}}
                    defaultView="dayGridMonth"
                    header={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.state.calendarEvents}
                    dateClick={this.handleDateClick}
                  />
                </CalendarContainer>

              </div>

              <div className="column side">Column</div>

            </Content>

            <Footer>
              <h1>Footer</h1>
            </Footer>

          </Container>
          

        </>
    );
    }

}