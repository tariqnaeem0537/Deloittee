import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Selection from "../component/selection.js";
import Grid from '@material-ui/core/Grid';
import InputField from "../component/inputField.js";
import List from "../component/list.js"
import ButtonCtrl from "../component/button.js"
import moment from 'moment';



class BoxCon extends React.Component{
    
    constructor(){
        super();
        this.state = {
           launchPad: 'Any',
           minYear: 'Any',
           maxYear: 'Any',
           keyword: '',
           open: false,
           results: [],
           limit:5
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }
    results = [];
    launchPadItems = [];
    filter = false;
    years = [];
    open = false;
    handleChange(event){ 
        this.setState({[event.target.name]: event.target.value});
        if (event.target.name === 'launchPad' && event.target.value !== 'Any') {
            this.results = [];
            this.filter = true;
            let items = this.props.list.filter(function(item) {
                            return (item.launch_site.site_name === event.target.value ? true : false);
                        });
            this.results  = items;
        }
        else if ((event.target.name === 'minYear' || event.target.name === 'maxYear') && event.target.value !== 'Any') {
            this.results = [];
            this.filter = true;
            let items = this.props.list.filter(function(item) {
                        return event.target.name === 'minYear' ?     
                        (moment(item.launch_date_local).format('YYYY') >= event.target.value ? true : false) :
                        (moment(item.launch_date_local).format('YYYY') <= event.target.value ? true : false);
                        });
            this.results  = items;
        }
        else if (event.target.name === 'keyword' && event.target.value !== '') {
            this.results = [];
            this.filter = true;
            let items = this.props.list.filter(function(item) {
                return (item.rocket.rocket_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1 ||
                 item.flight_number.toString().indexOf(event.target.value) > -1 ||
                 item.payloads[0].payload_id.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) ? true : false;
              });

            this.results  = items;
        } else {
            this.filter = false;
        }
    }

    search() { 
        this.results = this.props.list;
        this.filter = true;
        
        if (this.state.minYear !== 'Any' && this.state.maxYear !== 'Any' && 
            this.state.minYear > this.state.maxYear) {
            
            alert('Min Year cannot be greater then Max Year');
                
            } else {


            if (this.state.keyword.trim() !== '') {
                let  keyword = this.state.keyword;
                this.results = this.results.filter(function(item) {
                    return (item.rocket.rocket_name.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
                    item.flight_number.toString().indexOf(keyword) > -1 ||
                    item.payloads[0].payload_id.toLowerCase().indexOf(keyword.toLowerCase()) > -1) ? true : false;
                });
            }

            if (this.state.minYear !== 'Any' && this.state.maxYear !== 'Any') {
                let minYear = this.state.minYear;
                let maxYear = this.state.maxYear;
                
                this.results = this.results.filter(function(item) {
                    return (moment(item.launch_date_local).format('YYYY') >= minYear && 
                    moment(item.launch_date_local).format('YYYY') <= maxYear) ? true : false;
                });
            } else {

            if (this.state.minYear !== 'Any') {
                let minYear = this.state.minYear;
                this.results = this.results.filter(function(item) {
                
                            return (moment(item.launch_date_local).format('YYYY') >= minYear ? true : false) 
                        
                            });
            }

            if (this.state.maxYear !== 'Any') {
                let maxYear = this.state.maxYear;
                this.results = this.results.filter(function(item) {
                            return (moment(item.launch_date_local).format('YYYY') <= maxYear ? true : false) 
                        
                            });
            }
        }
            if (this.state.launchPad !== 'Any') {
                let launchPad = this.state.launchPad;
                this.results = this.results.filter(function(item) {
                                return (item.launch_site.site_name === launchPad ? true : false);
                            });
        
            }
            
            this.setState({results: this.results});
        }
       
    }

    componentDidMount() {
        this.props.loadData();
    }
    render(){
        if (this.props.list.length > 0) {
            this.launchPadItems = [...new Set(this.props.list.map(item =>  item.launch_site.site_name))]
            this.years = [...new Set(this.props.list.map(item =>  moment(item.launch_date_local).format('YYYY')))]
        }
        return(
            <div>
                <Grid container spacing={10}>
                    
                    <Grid item xs={2}>
                        <InputField  handleChange={this.handleChange} 
                                    name={'keyword'} 
                                    value={this.state.keyword}>
                        </InputField>
                    </Grid>
                    <Grid item xs={2}>
                        <Selection  handleChange={this.handleChange} 
                                    name={'launchPad'} 
                                    value={this.state.launchPad}
                                    items={this.launchPadItems}>
                        </Selection>
                    </Grid>
                    <Grid item xs={2}>
                        <Selection  handleChange={this.handleChange} 
                                    name={'minYear'} 
                                    value={this.state.minYear}
                                    items={this.years}>
                        </Selection>
                    </Grid>
                    <Grid item xs={2}>
                        <Selection  handleChange={this.handleChange} 
                                    name={'maxYear'} 
                                    value={this.state.maxYear}
                                    items={this.years}>
                        </Selection>
                    </Grid>
        <Grid item xs={2}>
        <ButtonCtrl text={'Apply'} submit={this.search}></ButtonCtrl>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
      <List items={this.filter ? this.results : this.props.list} limit={this.state.limit} length={this.filter ? this.results.length > this.state.limit ? this.state.limit : this.results.length  : this.state.limit}></List>
      </Grid>

            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);