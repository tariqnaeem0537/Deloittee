import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment'
import InputLabel from '@material-ui/core/InputLabel';
const listItem = (props) => {
    return (     
            <List>
                <InputLabel>{'Showing ' + props.length + ' Missions'}</InputLabel>
             { props.items.slice(0, props.limit).map(item => {
                return (<ListItem alignItems="flex-start" key={item.flight_number}>
                    <ListItemAvatar key={item.flight_number+'ListItemAvatar'}>
                    <Avatar alt="Remy Sharp" src={item.links.mission_patch} key={item.flight_number+'Avatar'}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary={<React.Fragment>
                                <div>{item.rocket.rocket_name + " - " + item.payloads[0] .payload_id + " #"+ item.flight_number}</div>
                            </React.Fragment>}
                    secondary={
                        <React.Fragment>
                        {"Launched "+ moment(item.launch_date_local).format('Do MMM YYYY') + 
                        " at " + moment(item.launch_date_local).format('hh:mm A') + " from " + item.launch_site.site_name }
                        </React.Fragment>
                    }
                    key={item.flight_number+'ListItemText'}
                    />
             </ListItem> )})}
            </List>
    )
  }

  export default listItem;
