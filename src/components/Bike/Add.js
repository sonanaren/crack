import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../App.css";
import axios from "axios";
import {
  Container,
  TextField,
  IconButton,
  Input,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model_code: "",
      model_name: "",
      price_ex_shoowroom: "",
      description: "",
      cc: "",
      no_of_cylinders: "",
      max_power: "",
      max_torque: "",
      valves_per_cylinder: "",
      fuel_delivery: "",
      cooling_system: "",
      starting_mechanism: "",
      tank_capacity: "",
      reserve_fuel_capacity: "",
      mileage: "",
      riding_range: "",
      no_of_gears: "",
      clutch: "",
      kerb_weight: "",
      length: "",
      width: "",
      height: "",
      wheelbase: "",
      ground_clearance: "",
      seat_height: "",
      front_brake_type: "",
      rear_brake_type: "",
      front_disk_drum_size: "",
      rear_disk_drum_size: "",
      code: "",
      chassis_type: "",
      front_suspension: "",
      rear_suspension: "",
      wheel_size: "",
      wheel_type: "",
      front_tyre: "",
      rear_tyre: "",
      speedometer: "Digital",
      technometer: "Analogue",
      gear_indicator: "1",
      fuel_warning_indicator: "1",
      fuel_gauge: "1",
      low_oil_indicator: "1",
      low_battery_indicator: "1",
      pillion_seat: "1",
      pillion_grabrail: "0",
      engine_kill_switch: "1",
      clock: "1",
      tripmeter_type: "Digital",
      tripmeter_count: "1",
      pass_light: "1",
      assist_slipper_clutch: "1",
      usb_charging: "1",
      variables_valves_actuation: "1",
      super_wide_tyre: "1",
      dual_channel_abs: "1",
      published_date: "",
      image: "",
      active: "1",
    };
    this.initialState = { ...this.state };
  }

  // On file select (from the pop up)
  onFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }

    axios
      .post("http://localhost:8082/api/bikes", formData)
      .then((res) => {
        this.setState(this.initialState);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Bike not added");
      });
  };

  render() {
    return (
      <Container>
        <form
          noValidate
          onSubmit={this.onSubmit}
          method="post"
          encType="multipart/form-data"
          className="upload-form"
          autoComplete="off"
        >
          <div>
            <Typography variant={"h4"}>Add new bike</Typography>
            <Grid container spacing={2}>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>General</Typography>
                <div className="form-group">
                  <TextField
                    name="model_code"
                    label="Model Code"
                    variant="outlined"
                    margin="dense"
                    value={this.state.model_code}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="model_name"
                    label="Model Name"
                    variant="outlined"
                    margin="dense"
                    value={this.state.model_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="price_ex_shoowroom"
                    label="Price Ex Showroom"
                    variant="outlined"
                    margin="dense"
                    value={this.state.price_ex_shoowroom}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="description"
                    label="Description"
                    variant="outlined"
                    margin="dense"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Engine</Typography>

                <div className="form-group">
                  <TextField
                    name="cc"
                    label="Cylinder capacity (CC)"
                    variant="outlined"
                    margin="dense"
                    value={this.state.cc}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="no_of_cylinders"
                    label="No of Cylinders"
                    variant="outlined"
                    margin="dense"
                    value={this.state.no_of_cylinders}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="max_power"
                    label="Power"
                    variant="outlined"
                    margin="dense"
                    value={this.state.max_power}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="max_torque"
                    label="Max Torque"
                    variant="outlined"
                    margin="dense"
                    value={this.state.max_torque}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="valves_per_cylinder"
                    label="Valves Per Cylinder"
                    variant="outlined"
                    margin="dense"
                    value={this.state.valves_per_cylinder}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="fuel_delivery"
                    label="Fuel Delivery"
                    variant="outlined"
                    margin="dense"
                    value={this.state.fuel_delivery}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="cooling_system"
                    label="Cooling System"
                    variant="outlined"
                    margin="dense"
                    value={this.state.cooling_system}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="starting_mechanism"
                    label="Starting Mechanism"
                    variant="outlined"
                    margin="dense"
                    value={this.state.starting_mechanism}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Fuel Consumptions</Typography>
                <div className="form-group">
                  <TextField
                    name="tank_capacity"
                    label="Tank Capacity"
                    variant="outlined"
                    margin="dense"
                    value={this.state.tank_capacity}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="reserve_fuel_capacity"
                    label="Reserve Fuel Capacity"
                    variant="outlined"
                    margin="dense"
                    value={this.state.reserve_fuel_capacity}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="mileage"
                    label="Mileage"
                    variant="outlined"
                    margin="dense"
                    value={this.state.mileage}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="riding_range"
                    label="Riding Range"
                    variant="outlined"
                    margin="dense"
                    value={this.state.riding_range}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Transmission</Typography>
                <div className="form-group">
                  <TextField
                    name="no_of_gears"
                    label="No of Gears"
                    variant="outlined"
                    margin="dense"
                    value={this.state.no_of_gears}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="clutch"
                    label="Clutch"
                    variant="outlined"
                    margin="dense"
                    value={this.state.clutch}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>
                  Dimensions and Weight
                </Typography>
                <div className="form-group">
                  <TextField
                    name="kerb_weight"
                    label="Kerb Weight"
                    variant="outlined"
                    margin="dense"
                    value={this.state.kerb_weight}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="length"
                    label="Length"
                    variant="outlined"
                    margin="dense"
                    value={this.state.length}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="width"
                    label="Width"
                    variant="outlined"
                    margin="dense"
                    value={this.state.width}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="height"
                    label="Height"
                    variant="outlined"
                    margin="dense"
                    value={this.state.height}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="wheelbase"
                    label="Wheelbase"
                    variant="outlined"
                    margin="dense"
                    value={this.state.wheelbase}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="ground_clearance"
                    label="Ground Clearance"
                    variant="outlined"
                    margin="dense"
                    value={this.state.ground_clearance}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    name="seat_height"
                    label="Seat Height"
                    variant="outlined"
                    margin="dense"
                    value={this.state.seat_height}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Braking</Typography>
                <div className="form-group">
                  <TextField
                    name="front_brake_type"
                    label="Front Brake Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_brake_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_brake_type"
                    label="Rear Brake Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_brake_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="front_disk_drum_size"
                    label="Front Disk Drum Size"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_disk_drum_size}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_disk_drum_size"
                    label="Rear Disk Drum Size"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_disk_drum_size}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Variant</Typography>
                <div className="form-group">
                  <TextField
                    name="code"
                    label="Code"
                    variant="outlined"
                    margin="dense"
                    value={this.state.code}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>
                  Chassis Suspension
                </Typography>
                <div className="form-group">
                  <TextField
                    name="chassis_type"
                    label="Chassis Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.chassis_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="front_suspension"
                    label="Front Suspension"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_suspension}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_suspension"
                    label="Rear Suspension"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_suspension}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Wheel Tyres</Typography>
                <div className="form-group">
                  <TextField
                    name="wheel_size"
                    label="Wheel Size"
                    variant="outlined"
                    margin="dense"
                    value={this.state.wheel_size}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="wheel_type"
                    label="Wheel Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.wheel_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="front_tyre"
                    label="Front Tyre"
                    variant="outlined"
                    margin="dense"
                    value={this.state.front_tyre}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="rear_tyre"
                    label="Rear Tyre"
                    variant="outlined"
                    margin="dense"
                    value={this.state.rear_tyre}
                    onChange={this.onChange}
                  />
                </div>
              </Grid>

              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Standard Features</Typography>
                <div className="form-group">
                  <TextField
                    name="speedometer"
                    label="Speedometer"
                    variant="outlined"
                    margin="dense"
                    value={this.state.speedometer}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="technometer"
                    label="Technometer"
                    variant="outlined"
                    margin="dense"
                    value={this.state.technometer}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="gear_indicator"
                    control={<Checkbox color="primary" />}
                    label="Gear Indicator"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="fuel_warning_indicator"
                    control={<Checkbox color="primary" />}
                    label="Fuel Warning Indicator"
                  />
                </div>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="fuel_gauge"
                    control={<Checkbox color="primary" />}
                    label="Fuel Gauge"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="low_oil_indicator"
                    control={<Checkbox color="primary" />}
                    label="Low Oil Indicator"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="low_battery_indicator"
                    control={<Checkbox color="primary" />}
                    label="Low Battery Indicator"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="pillion_seat"
                    control={<Checkbox color="primary" />}
                    label="Pillion Seat"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="pillion_grabrail"
                    control={<Checkbox color="primary" />}
                    label="Pillion Grabrail"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="engine_kill_switch"
                    control={<Checkbox color="primary" />}
                    label="Engine Kill Switch"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="clock"
                    control={<Checkbox color="primary" />}
                    label="Clock"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    name="tripmeter_type"
                    label="Tripmeter Type"
                    variant="outlined"
                    margin="dense"
                    value={this.state.tripmeter_type}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="tripmeter_count"
                    control={<Checkbox color="primary" />}
                    label="Tripmeter Count"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="pass_light"
                    control={<Checkbox color="primary" />}
                    label="Pass Light"
                  />
                </div>
              </Grid>
              <Grid item lg={3} xs={12} xl={3} sm={6}>
                <Typography variant={"subtitle1"}>Key Features</Typography>

                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="assist_slipper_clutch"
                    control={<Checkbox color="primary" />}
                    label="Assist Slipper Clutch"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="usb_charging"
                    control={<Checkbox color="primary" />}
                    label="USB Charging"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="variables_valves_actuation"
                    control={<Checkbox color="primary" />}
                    label="Variables Valves Actuation"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="super_wide_tyre"
                    control={<Checkbox color="primary" />}
                    label="Super Wide Tyre"
                  />
                </div>
                <div className="form-group">
                  <FormControlLabel
                    value="1"
                    name="dual_channel_abs"
                    control={<Checkbox color="primary" />}
                    label="Dual Channel ABS"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="form-group">
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="icon-button-photo"
                    name="image"
                    onChange={this.onFileChange}
                    type="file"
                    multiple
                  />
                  <label htmlFor="icon-button-photo">
                    <IconButton component="span">
                      <CloudUploadIcon />
                    </IconButton>
                  </label>
                  <Input type="submit" color="primary" value="Save" />
                </div>
              </Grid>
            </Grid>
          </div>
        </form>
      </Container>
    );
  }
}

export default Add;
