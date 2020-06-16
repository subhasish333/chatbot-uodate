import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';


class SimpleForm extends Component {

  handleEnd = ({ renderedSteps, steps, values }) => {
    console.log('Rendered steps');
    console.log(renderedSteps);
    console.log('Steps');
    console.log(steps);
    console.log('Values');
    console.log(values);
  }

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "#4682B4",
      padding: "10px",
      fontFamily: "Arial"
    };
    const theme = {
      background: '#EAF0F1',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#3C40C6',
      headerFontColor: '#fff',
      headerFontSize: '20px',
      botBubbleColor: '#487EB0',
      botFontColor: '#fff',
      userBubbleColor: '#4BCFFA',
      userFontColor: '#fff',
    };

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Mozilla Survey"
          handleEnd={this.handleEnd}
          botAvatar="https://i.ya-webdesign.com/images/png-avatar-4.png"
          width="100%"
          userAvatar="https://pngimage.net/wp-content/uploads/2018/06/flat-user-icon-png-6.png"
          recognitionEnable={true}
          speechSynthesis={{ enable: true, lang: "en" }}
          steps={[

            {
              id: "1",
              message: "What is your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}! What is your gender?",
              trigger: "gender",
            },
            {
              id: "gender",
              options: [
                { value: "male", label: "Male", trigger: "5" },
                { value: "female", label: "Female", trigger: "5" },
              ],
            },
            {
              id: "5",
              message: "How old are you?",
              trigger: "age",
            },
            {
              id: "age",
              user: true,
              trigger: "7",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
          
                return true;
              },
            },
            {
              id: "7",
              message: "Great! Which religion do you belong to?",
              trigger: "religion",
            },
            {
              id: "religion",
              user: true,
              trigger: "9",
            },
            {
              id: "9",
              message: "Okay! So, What is your caste?",
              trigger: "caste",
            },
            {
              id: "caste",
              user: true,
              trigger: "11",
            },
            {
              id: "11",
              message:
                "Nice. So, I would like to know what is your occupation?",
              trigger: "occupation",
            },
            {
              id: "occupation",
              options: [
                { value: "farmer", label: "Farmer", trigger: "14" },
                {
                  value: "livestock_breeder",
                  label: "Livestock Breeder",
                  trigger: "14",
                },
                { value: "retired", label: "Retired", trigger: "14" },
                { value: "doctor", label: "Doctor", trigger: "14" },
                { value: "student", label: "Student", trigger: "14" },
                { value: "merchant", label: "Merchant", trigger: "14" },
                {
                  value: "civil_servant",
                  label: "Civil Servant",
                  trigger: "14",
                },
                { value: "teacher", label: "Teacher", trigger: "14" },
                { value: "worker", label: "Worker", trigger: "14" },
                { value: "others", label: "Others", trigger: "other_occ" },
              ],
            },
            {
              id: "other_occ",
              message: "What other occupation do you do?",
              trigger: "occupation_other",
            },
            {
              id: "occupation_other",
              user: true,
              trigger: "14",
            },
            {
              id: "14",
              message:
                "Okay, We have different surveys here. Please choose the one you wish to take.",
              trigger: "survey",
            },
            {
              id: "survey",
              options: [
                {
                  value: "household",
                  label: "Household Survey",
                  trigger: "16",
                },
                {
                  value: "local_assets",
                  label: "Local Assets Survey",
                  trigger: "34",
                },
                {
                  value: "household_inc_and_liab",
                  label: "Household Income and Liabilities",
                  trigger: "end",
                },
                {
                  value: "housing_and_infrastructure",
                  label: "Housing and Infrastructure",
                  trigger: "end",
                },
                { value: "education", label: "Education", trigger: "end" },
                { value: "health", label: "Health", trigger: "end" },
                {
                  value: "perc_and_expc",
                  label: "Perceptions and Expectations",
                  trigger: "end",
                },
              ],
            },
            {
              id: "16",
              message: "Fine, So what is your main household occupation?",
              trigger: "main_household_occupation",
            },
            {
              id: "main_household_occupation",
              options: [
                { value: "farmer", label: "Farmer", trigger: "19" },
                {
                  value: "livestock_breeder",
                  label: "Livestock Breeder",
                  trigger: "19",
                },
                { value: "retired", label: "Retired", trigger: "19" },
                { value: "doctor", label: "Doctor", trigger: "19" },
                { value: "student", label: "Student", trigger: "19" },
                { value: "merchant", label: "Merchant", trigger: "19" },
                {
                  value: "civil_servant",
                  label: "Civil Servant",
                  trigger: "19",
                },
                { value: "teacher", label: "Teacher", trigger: "19" },
                { value: "worker", label: "Worker", trigger: "19" },
                {
                  value: "others",
                  label: "Others",
                  trigger: "household_other_occupation",
                },
              ],
            },
            {
              id: "household_other_occupation",
              message:"What other occupation do you do",
              trigger: "household_other_occupation2",
            },
            {
              id: "household_other_occupation2",
              user: true,
              trigger: "19",
            },
            {
              id: "19",
              message:
                "Just a few more questions. What is your household annual income?",
              trigger: "household_annual_income",
            },
            {
              id: "household_annual_income",
              user: true,
              trigger: "21",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                }
                return true;
              },
            },
            {
              id: "21",
              message: "Do you own any agricultural land/wasteland ?",
              trigger: "own_land",
            },
            {
              id: "own_land",
              options: [
                { value: "yes", label: "Yes", trigger: "agri_land" },
                { value: "no", label: "No", trigger: "24" },
              ],
            },
            {
              id: "agri_land",
              message: "Enter the land size in yards:",
              trigger: "own_land_size",
            },
            {
              id: "own_land_size",
              user: true,
              trigger: "24",
          
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
          
                return true;
              }
              
            },
          
            {
              id: "24",
              message: "Which type of house do you live in?",
              trigger: "house_type",
            },
            {
              id: "house_type",
              options: [
                { value: "katcha", label: "Katcha", trigger: "26" },
                { value: "pucca", label: "Pucca", trigger: "26" },
                { value: "mixed", label: "Mixed", trigger: "26" },
              ],
            },
            {
              id: "26",
              message: "What is your household type?",
              trigger: "household_type",
            },
            {
              id: "household_type",
              options: [
                { value: "nuclear", label: "Nuclear", trigger: "28" },
                { value: "joint", label: "Joint", trigger: "28" },
                { value: "extended", label: "Extended", trigger: "28" },
                { value: "others", label: "Others", trigger: "28" },
              ],
            },
            {
              id: "28",
              message:
                "Last Question!! Do you have permanent domicile of the village?",
              trigger: "permanent_domicile",
            },
            {
              id: "permanent_domicile",
              options: [
                { value: "yes", label: "Yes", trigger: "30" },
                { value: "no", label: "No", trigger: "14" },
              ],
            },
            
          
          
            {
              id: "30",
              message: "From when do you have the domicile?",
              trigger: "domicile_time",
            },
            {
              id: "domicile_time",
              options: [
                { value: "birth", label: "Birth", trigger: "14" },
                { value: "immigrant", label: "Immigrant", trigger: "32" },
              ],
            },
            {
              id: "32",
              message: "So when did you get the permanent domicile?",
              trigger: "domicile_time_immigrant",
            },
            {
              id: "domicile_time_immigrant",
              options: [
                { value: "marriage", label: "Marriage", trigger: "14" },
                { value: "labour", label: "Labour", trigger: "14" },
                { value: "service", label: "Service", trigger: "14" },
                { value: "business", label: "Business", trigger: "14" },
                {
                  value: "domicile_time_immigrant_other",
                  label: "Other",
                  trigger: "other_dom",
                },
              ],
            },
            {
              id: "other_dom",
              message: "What is the other type of immigration you selected?",
              trigger: "domicile_time_immigrant_other",
            },
            {
              id: "domicile_time_immigrant_other",
              user: true,
              trigger: "14",
            },
            {
              
              id: "34",
              message:
                "Do you own Agricultural Land in Possession (in Bighas):",
              trigger: "land_possess",
            },
             {
                 id: "land_possess",
               options: [
                 { value: "yes", label: "Yes", trigger: "land_option" },
                 { value: "no", label: "No", trigger: "end" },
               ],
             },
             {
               id: "land_option",
               component: (
                <form style={mystyle}>
                <input type="checkbox" name="owned_irrigate" value="owned_irrigate" />Owned(Irrigated)<br></br>
                <input type="checkbox" name="owned_irrigate" value="owned_irrigate" />Owened(Unirrigated)<br></br>
                <input type="checkbox" name="leased_out_irrigate" value="leased_out_irrigate" />Leased out (Irrigated)<br></br>
                <input type="checkbox" name="leased_out_unirrigate" value="leased_out_unirrigate" />Leased out (Unirrigated)<br></br>
                <input type="checkbox" name="leased_in_irrigate" value="leased_in_irrigate" />Leased in(Irrigated)<br></br>
                <input type="checkbox" name="leased_in_unirrigate" value="leased_in_unirrigate" />Leased out(Unirrigated)<br></br>
          
              </form>
               ),
               trigger: "approve",
             },
             {
               id:"approve",
               options: [
                { value: "done", label: "Submit selection", trigger: "total_bighas" },
               
              ],
             },
             {
               id: "total_bighas",
               message: "Enter Total Bighas:Irrigated-",
               trigger: "total_irrigate",
               
             },
             {
               id: "total_irrigate",
               user: true,
               trigger: "total_uninrigate",
               validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
             },
             {
               id: "total_uninrigate",
               message: "Enter Total Bighas:Unirrigated-",
               trigger: "total_unirrigate2",
             },
             {
               id: "total_unirrigate2",
               user: true,
               trigger: "36",
               validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
             },
            
            
             
             {
               id: "36",
               message: "Do you have Built up Area?",
               trigger:"37",
             },
             {
               id:"37",
               options: [
                { value: "yes", label: "Yes", trigger: "38" },
                { value: "no", label: "No", trigger: "83" },//chANGE TOQ2
              ],
              
             },
          
             {
               id:"38",
               message:"Do yo have residential area?",
               trigger:"43",
          
             },
          
             {
               id:"43",
               options: [
                { value: "yes", label: "Yes", trigger: "44" },
                { value: "no", label: "No", trigger: "50" },//comercial
              ],
             },
          
             {
               id:"44",
               message:"How many you have ?",
               trigger:"45",
               
             },
          
             {
               id:"45",
               user:true,
               trigger:"46",
               validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
          
             },
             {
              id:"46",
              message:"Total residential area (in sq yards) ?",
              trigger:"47",
            },
            {
              id:"47",
              user:true,
              trigger:"48",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
          
            },
          
            {
              id:"48",
              message:"Total value of Residential area (in Rs. )?",
              trigger:"49",
            },
            {
              id:"49",
              user:true,
              trigger:"50",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
          
            },
          
            {
              id:"50",
              message:"Do yo have Commercial/Shops ?",
              trigger:"51",
          
            },
          
            {
              id:"51",
              options: [
               { value: "yes", label: "Yes", trigger: "52" },
               { value: "no", label: "No", trigger: "58" },//industrial
             ],
            },
          
            {
              id:"52",
              message:"How many you have ?",
              trigger:"53",
            },
          
            {
              id:"53",
              user:true,
              trigger:"54",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
          
            },
            {
             id:"54",
             message:"Total Commertial/Shop area (in sq yards) ?",
             trigger:"55",
           },
           {
             id:"55",
             user:true,
             trigger:"56",
          
           },
          
           {
             id:"56",
             message:"Total value of Commertial/Shop area (in Rs. )?",
             trigger:"57",
           },
           {
             id:"57",
             user:true,
             trigger:"58",
             validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          return true;
          },
          
           },
          
          
           {
            id:"58",
            message:"Do you have Industrial area ?",
            trigger:"59",
          
          },
          
          {
            id:"59",
            options: [
             { value: "yes", label: "Yes", trigger: "60" },
             { value: "no", label: "No", trigger: "66" },//barnes
           ],
          },
          
          {
            id:"60",
            message:"How many you have ?",
            trigger:"61",
          },
          
          {
            id:"61",
            user:true,
            trigger:"62",
            validator: (value) => {
              if (isNaN(value)) {
                return "value must be a number";
              } else if (value < 0) {
                return "value must be positive";
              } 
              return true;
            },
          
          },
          {
           id:"62",
           message:"Total Industrial area (in sq yards) ?",
           trigger:"63",
          },
          {
           id:"63",
           user:true,
           trigger:"64",
           validator: (value) => {
            if (isNaN(value)) {
              return "value must be a number";
            } else if (value < 0) {
              return "value must be positive";
            } 
            return true;
          },
          
          },
          
          {
           id:"64",
           message:"Total value of Industrial area (in Rs. )?",
           trigger:"65",
          },
          {
           id:"65",
           user:true,
           trigger:"66",
           validator: (value) => {
            if (isNaN(value)) {
              return "value must be a number";
            } else if (value < 0) {
              return "value must be positive";
            } 
            return true;
          },
          
          },
          
          {
          id:"66",
          message:"Do you have Barns/Animal Farms ?",
          trigger:"67",
          
          },
          
          {
          id:"67",
          options: [
           { value: "yes", label: "Yes", trigger: "69" },
           { value: "no", label: "No", trigger: "75" },//barnes
          ],
          },
          
          {
          id:"69",
          message:"How many you have ?",
          trigger:"70",
          },
          
          {
          id:"70",
          user:true,
          trigger:"71",
          validator: (value) => {
            if (isNaN(value)) {
              return "value must be a number";
            } else if (value < 0) {
              return "value must be positive";
            } 
            return true;
          },
          
          },
          {
          id:"71",
          message:"Total Barns/Animal Farms area (in sq yards) ?",
          trigger:"72",
          },
          {
          id:"72",
          user:true,
          trigger:"73",
          validator: (value) => {
          if (isNaN(value)) {
            return "value must be a number";
          } else if (value < 0) {
            return "value must be positive";
          } 
          return true;
          },
          
          },
          
          {
          id:"73",
          message:"Total value of Barns/Animal Farms (in Rs. )?",
          trigger:"74",
          },
          {
          id:"74",
          user:true,
          trigger:"75",
          validator: (value) => {
          if (isNaN(value)) {
            return "value must be a number";
          } else if (value < 0) {
            return "value must be positive";
          } 
          return true;
          },
          
          },
          {
          id:"75",
          message:"Do you have any other Built-up areas ?",
          trigger:"76",
          
          },
          
          
          
          {
          id:"76",
          options: [
          { value: "yes", label: "Yes", trigger: "other_built" },
          { value: "no", label: "No", trigger: "83" },
          ],
          },
          {
          id:"other_built",
          message:"Enter name of the other built up area?",
          trigger:"name_built",
          },
          {
          id:"name_built",
          user:true,
          trigger:"77",
          },
          
          
          {
          id:"77",
          message:"How many {previousValue} you have ?",
          trigger:"78",
          },
          
          {
          id:"78",
          user:true,
          trigger:"79",
          validator: (value) => {
          if (isNaN(value)) {
            return "value must be a number";
          } else if (value < 0) {
            return "value must be positive";
          } 
          
          return true;
          },
          
          },
          {
          id:"79",
          message:"Total area (in sq yards) ?",
          trigger:"80",
          },
          {
          id:"80",
          user:true,
          trigger:"81",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          return true;
          },
          },
          
          {
          id:"81",
          message:"Total value  (in Rs. )?",
          trigger:"82",
          },
          {
          id:"82",
          user:true,
          trigger:"83",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          return true;
          },
          
          },
          {
          id:"83",
          message:"Do you have any livestock and Poultry?",
          trigger:"84",
          },
          {
          id:"84",
          options: [
          { value: "yes", label: "Yes", trigger: "85" },
          { value: "no", label: "No", trigger: "129" },//q4
          ],
          },
          
          {
          id:"85",
          message:"Do you have any Cows?",
          trigger:"cows",
          },
          {
          id:"cows",
          options: [
          { value: "yes", label: "Yes", trigger: "86" },
          { value: "no", label: "No", trigger: "88" },
          ],
          },
          {
          id:"86",
          message:"How many Cows do you have ?",
          trigger:"87",
          },
          {
          id: "87",
          user: true,
          trigger: "88",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          
          {
          id:"88",
          message:"Do you have any Buffalo?",
          trigger:"89",
          },
          {
          id:"89",
          options: [
          { value: "yes", label: "Yes", trigger: "90" },
          { value: "no", label: "No", trigger: "92" },
          ],
          },
          {
          id:"90",
          message:"How many Buffalos do you have ?",
          trigger:"91",
          },
          {
          id: "91",
          user: true,
          trigger: "92",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          
          {
          id:"92",
          message:"Do you have any Camel?",
          trigger:"93",
          },
          {
          id:"93",
          options: [
          { value: "yes", label: "Yes", trigger: "94" },
          { value: "no", label: "No", trigger: "96" },
          ],
          },
          {
          id:"94",
          message:"How many Camel do you have ?",
          trigger:"95",
          },
          {
          id: "95",
          user: true,
          trigger: "96",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          {
          id:"96",
          message:"Do you have any Goats?",
          trigger:"97",
          },
          {
          id:"97",
          options: [
          { value: "yes", label: "Yes", trigger: "99" },
          { value: "no", label: "No", trigger: "101" },
          ],
          },
          {
          id:"99",
          message:"How many Goats do you have ?",
          trigger:"100",
          },
          {
          id: "100",
          user: true,
          trigger: "101",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          {
          id:"101",
          message:"Do you have any Sheeps?",
          trigger:"102",
          },
          {
          id:"102",
          options: [
          { value: "yes", label: "Yes", trigger: "103" },
          { value: "no", label: "No", trigger: "105" },
          ],
          },
          {
          id:"103",
          message:"How many Sheeps do you have ?",
          trigger:"104",
          },
          {
          id: "104",
          user: true,
          trigger: "105",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          {
          id:"105",
          message:"Do you have any Horses/Ponies?",
          trigger:"106",
          },
          {
          id:"106",
          options: [
          { value: "yes", label: "Yes", trigger: "107" },
          { value: "no", label: "No", trigger: "109" },
          ],
          },
          {
          id:"107",
          message:"How many Horses/Ponies do you have ?",
          trigger:"108",
          },
          {
          id: "108",
          user: true,
          trigger: "109",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          {
          id:"109",
          message:"Do you have any Mules?",
          trigger:"110",
          },
          {
          id:"110",
          options: [
          { value: "yes", label: "Yes", trigger: "111" },
          { value: "no", label: "No", trigger: "113" },
          ],
          },
          {
          id:"111",
          message:"How many Mules do you have ?",
          trigger:"112",
          },
          {
          id: "112",
          user: true,
          trigger: "113",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          {
          id:"113",
          message:"Do you have any Pigs?",
          trigger:"114",
          },
          {
          id:"114",
          options: [
          { value: "yes", label: "Yes", trigger: "115" },
          { value: "no", label: "No", trigger: "117" },
          ],
          },
          {
          id:"115",
          message:"How many Pigs do you have ?",
          trigger:"116",
          },
          {
          id: "116",
          user: true,
          trigger: "117",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          {
          id:"117",
          message:"Do you have any Fowls/Chicken?",
          trigger:"118",
          },
          {
          id:"118",
          options: [
          { value: "yes", label: "Yes", trigger: "119" },
          { value: "no", label: "No", trigger: "121" },
          ],
          },
          {
          id:"119",
          message:"How many Fowls/Chicken do you have ?",
          trigger:"120",
          },
          {
          id: "120",
          user: true,
          trigger: "121",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          {
          id:"121",
          message:"Do you have any Ducks?",
          trigger:"122",
          },
          {
          id:"122",
          options: [
          { value: "yes", label: "Yes", trigger: "123" },
          { value: "no", label: "No", trigger: "125" },
          ],
          },
          {
          id:"123",
          message:"How many Ducks do you have ?",
          trigger:"124",
          },
          {
          id: "124",
          user: true,
          trigger: "125",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          },
          
          
          {
          id:"125",
          message:"Do you have any other Livestock/Poultry?",///
          trigger:"other_livestock",
          },
          {
          id:"other_livestock",
          options: [
          { value: "yes", label: "Yes", trigger: "126" },
          { value: "no", label: "No", trigger: "129" },//q4
          ],
          },
          
          {
          id:"126",
          message:"Enter name of the other Livestock/Poultry?",
          trigger:"126",
          },
          {
          id:"126",
          user:true,
          trigger:"127",
          },
          
          
          {
          id:"127",
          message:"How many {previousValue} you have ?",
          trigger:"128",
          },
          
          {
          id:"128",
          user:true,
          trigger:"129",
          validator: (value) => {
          if (isNaN(value)) {
          return "value must be a number";
          } else if (value < 0) {
          return "value must be positive";
          } 
          
          return true;
          },
          
          },
          
          {
              id: "129",
              message: "Do you have agricultural machinery?",
              trigger: "130",
            },
            {
              id:"130",
              options: [
               { value: "yes", label: "Yes", trigger: "131" },
               { value: "no", label: "No", trigger: "186" },//////////////////q5
              ],
            },
          
            {
              id: "131",
              message: "Do you have Ploughs?",
              trigger: "132",
            },
            {
              id:"132",
              options: [
               { value: "yes", label: "Yes", trigger: "133" },
               { value: "no", label: "No", trigger: "136" },//
              ],
            },
            {
              id: "133",
              message: "How many Ploughs do you have?",
              trigger: "plough",
            },
          
            {
              id:"plough",
              user:true,
              trigger:"134",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "134",
              message: "Enter value of Ploughs?",
              trigger: "135",
            },
          
            {
              id:"135",
              user:true,
              trigger:"136",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
          
            {
              id: "136",
              message: "Do you have Carts?",
              trigger: "137",
            },
            {
              id:"137",
              options: [
               { value: "yes", label: "Yes", trigger: "138" },
               { value: "no", label: "No", trigger: "142" },//
              ],
            },
            {
              id: "138",
              message: "How many Carts do you have?",
              trigger: "139",
            },
          
            {
              id:"139",
              user:true,
              trigger:"140",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "140",
              message: "Enter value of Carts?",
              trigger: "141",
            },
          
            {
              id:"141",
              user:true,
              trigger:"142",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "142",
              message: "Do you have Electric Pump?",
              trigger: "143",
            },
            {
              id:"143",
              options: [
               { value: "yes", label: "Yes", trigger: "144" },
               { value: "no", label: "No", trigger: "148" },//
              ],
            },
            {
              id: "144",
              message: "How many Electric Pump do you have?",
              trigger: "145",
            },
          
            {
              id:"145",
              user:true,
              trigger:"146",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "146",
              message: "Enter value of Electric Pump?",
              trigger: "147",
            },
          
            {
              id:"147",
              user:true,
              trigger:"148",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "148",
              message: "Do you have Ghanies?",
              trigger: "149",
            },
            {
              id:"149",
              options: [
               { value: "yes", label: "Yes", trigger: "150" },
               { value: "no", label: "No", trigger: "154" },//
              ],
            },
            {
              id: "150",
              message: "How many Ghanies do you have?",
              trigger: "151",
            },
          
            {
              id:"151",
              user:true,
              trigger:"152",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "152",
              message: "Enter value of Ghanies?",
              trigger: "153",
            },
          
            {
              id:"153",
              user:true,
              trigger:"154",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "154",
              message: "Do you have Sugarcane Crushers?",
              trigger: "155",
            },
            {
              id:"155",
              options: [
               { value: "yes", label: "Yes", trigger: "156" },
               { value: "no", label: "No", trigger: "160" },//
              ],
            },
            {
              id: "156",
              message: "How many Sugarcane Crushers do you have?",
              trigger: "157",
            },
          
            {
              id:"157",
              user:true,
              trigger:"158",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "158",
              message: "Enter value of Sugarcane Crushers?",
              trigger: "159",
            },
          
            {
              id:"159",
              user:true,
              trigger:"160",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "160",
              message: "Do you have Oil Engines?",
              trigger: "161",
            },
            {
              id:"161",
              options: [
               { value: "yes", label: "Yes", trigger: "162" },
               { value: "no", label: "No", trigger: "166" },//
              ],
            },
            {
              id: "162",
              message: "How many Oil Engines do you have?",
              trigger: "163",
            },
          
            {
              id:"163",
              user:true,
              trigger:"164",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "164",
              message: "Enter value of Oil Engines?",
              trigger: "165",
            },
          
            {
              id:"165",
              user:true,
              trigger:"166",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "166",
              message: "Do you have Chaff Cutters?",
              trigger: "132",
            },
            {
              id:"167",
              options: [
               { value: "yes", label: "Yes", trigger: "168" },
               { value: "No", label: "No", trigger: "172" },//
              ],
            },
            {
              id: "168",
              message: "How many Chaff Cutters do you have?",
              trigger: "169",
            },
          
            {
              id:"169",
              user:true,
              trigger:"170",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "170",
              message: "Enter value of Chaff Cutters?",
              trigger: "171",
            },
          
            {
              id:"171",
              user:true,
              trigger:"172",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "172",
              message: "Do you have Threshers?",
              trigger: "173",
            },
            {
              id:"173",
              options: [
               { value: "yes", label: "Yes", trigger: "174" },
               { value: "No", label: "No", trigger: "178" },//
              ],
            },
            {
              id: "174",
              message: "How many Threshers do you have?",
              trigger: "175",
            },
          
            {
              id:"175",
              user:true,
              trigger:"176",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "176",
              message: "Enter value of Threshers?",
              trigger: "177",
            },
          
            {
              id:"177",
              user:true,
              trigger:"178",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "178",
              message: "Do you have any other Agricultural Machinary?",
              trigger: "179",
            },
            {
              id:"179",
              options: [
               { value: "yes", label: "Yes", trigger: "180" },
               { value: "No", label: "No", trigger: "186" },//
              ],
            },
          
            {
              id:"180",
              message:"Ener name of the machinary?",
              trigger:"181"
          
            },
            {
              id:"181",
              user:true,
              trigger:"182"
          
            },
          
            {
              id: "182",
              message: "How many {previousValue} do you have?",
              trigger: "183",
            },
          
            {
              id:"183",
              user:true,
              trigger:"184",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "184",
              message: "Enter its value?",
              trigger: "185",
            },
          
            {
              id:"185",
              user:true,
              trigger:"186",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            },
            {
              id:"186",
              message:"Do you have any sources of Irrigation?",
              trigger:"187",
              
            },
            {
              id:"187",
              options: [
               { value: "yes", label: "Yes", trigger: "188" },
               { value: "No", label: "No", trigger: "212" },/////////////////////chANGE TOQ6
             ],
             
            },
            {
              id:"188",
              message:"Do you have Open well(Electric)?",
              trigger:"189",
              
            },
            {
              id:"189",
              options: [
               { value: "yes", label: "Yes", trigger: "190" },
               { value: "No", label: "No", trigger: "194" },//
             ],
             
            },
          
            {
              id: "190",
              message: "How many Open well(Electric) do you have?",
              trigger: "191",
            },
          
            {
              id:"191",
              user:true,
              trigger:"192",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "192",
              message: "Enter area of Open well(Electric)?(in BHARANA)",
              trigger: "193",
            },
          
            {
              id:"193",
              user:true,
              trigger:"194",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
          
            {
              id:"194",
              message:"Do you have Open well(Diesel)?",
              trigger:"195",
              
            },
            {
              id:"195",
              options: [
               { value: "yes", label: "Yes", trigger: "196" },
               { value: "No", label: "No", trigger: "200" },//
             ],
             
            },
          
            {
              id: "196",
              message: "How many Open well(Diesel) do you have?",
              trigger: "197",
            },
          
            {
              id:"197",
              user:true,
              trigger:"198",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "198",
              message: "Enter area of Open well(Diesel)?(in BHARANA)",
              trigger: "199",
            },
          
            {
              id:"199",
              user:true,
              trigger:"200",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
          
            {
              id:"200",
              message:"Do you have Bore well?",
              trigger:"189",
              
            },
            {
              id:"201",
              options: [
               { value: "yes", label: "Yes", trigger: "202" },
               { value: "no", label: "No", trigger: "206" },//
             ],
             
            },
          
            {
              id: "202",
              message: "How many Bore well do you have?",
              trigger: "203",
            },
          
            {
              id:"203",
              user:true,
              trigger:"204",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "204",
              message: "Enter area of Borewell?(in BHARANA)",
              trigger: "205",
            },
          
            {
              id:"205",
              user:true,
              trigger:"206",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
          
            {
              id:"206",
              message:"Do you have Manulal/Animal driven well?",
              trigger:"207",
              
            },
            {
              id:"207",
              options: [
               { value: "yes", label: "Yes", trigger: "208" },
               { value: "no", label: "No", trigger: "212" },//
             ],
             
            },
          
            {
              id: "208",
              message: "How many Manulal/Animal driven well do you have?",
              trigger: "209",
            },
          
            {
              id:"209",
              user:true,
              trigger:"210",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id: "210",
              message: "Enter area of Manulal/Animal driven well?(in BHARANA)",
              trigger: "211",
            },
          
            {
              id:"211",
              user:true,
              trigger:"212",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } 
                return true;
              },
            }, 
            {
              id:"212",
              message:"Do you have Area for that source of irrigation?",
              trigger:"213",
            },
          
            {
              id:"213",
              options: [
               { value: "yes", label: "Yes", trigger: "214" },
               { value: "no", label: "No", trigger: "217" },////////////q7
             ],
             
            },
            {
              id:"214",
              message:"Which of the following source  do you possess?",
              trigger:"source_irr",
            },
            {
              id:"source_irr",
              options: [
               { value: "canal_irrigation", label: "Canal Irrigated", trigger: "217" },
               { value: "river_irrigation", label: "River Irrigated", trigger: "217" },
               { value: "lake_irrigation", label: "Lake/Pond Irrigated", trigger: "217" },
               { value: "other_irrigation", label: "Other", trigger: "215" },
             ],
             
            },
            {
              id:"215",
              message:"Enter other source of Irrigation?",
              trigger:"216",
            },
            {
              id:"216",
             user:true,
              trigger:"217",
            },
            
    {
      id:"217",
      message:"Do you have Area for crop?",
      trigger:"218",
    },

    {
      id:"218",
      options: [
       { value: "yes", label: "Yes", trigger: "219" },
       { value: "no", label: "No", trigger: "end" },//////
      ],
    },
    {
      id:"219",
      message:"Do you have Cereals?",
      trigger:"220",
    },
    {
      id:"220",
      options: [
       { value: "yes", label: "Yes", trigger: "221" },
       { value: "no", label: "No", trigger: "224" },//////
      ],
    },
    {
      id:"221",
      options: [
       { value: "wheat", label: "Wheat", trigger: "224" },
       { value: "maize", label: "Maize(Makka)", trigger: "224" },
       { value: "barley", label: "Barley(jou)", trigger: "224" },
       { value: "rice", label: "Rice", trigger: "224" },
       { value: "other_cereals", label: "Other", trigger: "222" },
      ],
    },
    {
      id:"222",
      message:"Enter name of other Cereals that you possess?",
      trigger:"223",
    },
    {
      id:"223",
     user:true,
      trigger:"224",
    },


    {
      id:"224",
      message:"Do you have Millets?",
      trigger:"225",
    },
    {
      id:"225",
      options: [
       { value: "yes", label: "Yes", trigger: "226" },
       { value: "no", label: "No", trigger: "229" },//////
      ],
    },
    {
      id:"226",
      options: [
        { value: "millet", label: "Millet", trigger: "229" },
        { value: "jowar", label: "Jowar", trigger: "229" },
      { value: "other_millets", label: "Other", trigger: "227" },
       ],
      
    },
    {
      id:"227",
      message:"Enter name of other Millets that you possess?",
      trigger:"228",
    },
    {
      id:"228",
     user:true,
      trigger:"229",
    },


    {
      id:"229",
      message:"Do you have Pulses?",
      trigger:"230",
    },
    {
      id:"230",
      options: [
       { value: "yes", label: "Yes", trigger: "231" },
       { value: "no", label: "No", trigger: "234" },//////
      ],
    },
    {
      id:"231",
      options: [
        { value: "blackgram", label: "Black Grams", trigger: "234" },
        { value: "gram", label: "Gram(chana)", trigger: "234" },
        { value: "cowpea", label: "Cowpea(Choula)", trigger: "234" },
        { value: "mungbean", label: "Mung Bean", trigger: "234" },
        { value: "pegeonpea", label: "Pegeon Pea", trigger: "234" },
        { value: "other_pulses", label: "Other", trigger: "232" },
       ],
    },
    {
      id:"232",
      message:"Enter name of other Pulses that you possess?",
      trigger:"233",
    },
    {
      id:"233",
     user:true,
      trigger:"234",
    },



    {
      id:"234",
      message:"Do you have Oil Seeds?",
      trigger:"236",
    },
    {
      id:"236",
      options: [
       { value: "yes", label: "Yes", trigger: "237" },
       { value: "no", label: "No", trigger: "240" },//////
      ],
    },
    {
      id:"237",
      options: [
       { value: "groundnut", label: "Ground nut(mungfali)", trigger: "240" },
       { value: "rapeseeds", label: "Rape Seeds", trigger: "240" },
       { value: "blackmustard", label: "Black Mustard", trigger: "240" },
       { value: "taramira", label: "Taramira", trigger: "240" },
       { value: "seasmum", label: "Sesamum", trigger: "240" },
       { value: "other_oilseeds", label: "Other", trigger: "238" },
      ],
    },
    {
      id:"238",
      message:"Enter name of other oil seeds that you possess?",
      trigger:"239",
    },
    {
      id:"239",
     user:true,
      trigger:"240",
    },



    {
      id:"240",
      message:"Do you have Cash Crops?",
      trigger:"241",
    },
    {
      id:"241",
      options: [
       { value: "yes", label: "Yes", trigger: "242" },
       { value: "no", label: "No", trigger: "245" },//////
      ],
    },
    {
      id:"242",
      options: [
       { value: "wheat", label: "Sugarcane", trigger: "245" },
       { value: "maize", label: "Tobacco", trigger: "245" },
       { value: "barley", label: "Potato", trigger: "245" },
      
       { value: "other_cashcrops", label: "Other", trigger: "243" },
      ],
    },
    {
      id:"243",
      message:"Enter name of other Cash crops that you possess?",
      trigger:"244",
    },
    {
      id:"244",
     user:true,
      trigger:"245",
    },



    {
      id:"245",
      message:"Do you have Fruits?",
      trigger:"246",
    },
    {
      id:"246",
      options: [
       { value: "yes", label: "Yes", trigger: "247" },
       { value: "no", label: "No", trigger: "250" },//////
      ],
    },
    {
      id:"247",
      options: [
       { value: "guava", label: "Guava", trigger: "250" },
       { value: "lemon", label: "Lemon", trigger: "250" },
       { value: "papaya", label: "Papaya", trigger: "250" },
       { value: "zigyphus", label: "Zigyphus", trigger: "250" },
       { value: "other_fruits", label: "Other", trigger: "248" },
      ],
    },
    {
      id:"248",
      message:"Enter name of other fruits that yoou possess?",
      trigger:"249",
    },
    {
      id:"249",
     user:true,
      trigger:"250",
    },



    {
      id:"250",
      message:"Do you have Vegetables?",
      trigger:"252",
    },
    {
      id:"252",
      options: [
       { value: "yes", label: "Yes", trigger: "253" },
       { value: "no", label: "No", trigger: "256" },//////
      ],
    },
    {
      id:"253",
      options: [
       { value: "tomato", label: "Tomato", trigger: "256" },
       { value: "brinjal", label: "Brinjal", trigger: "256" },
       { value: "chillies", label: "Chillies", trigger: "256" },
       { value: "raddish", label: "Radish", trigger: "256" },
       { value: "carrot", label: "Carrot", trigger: "256" },
       { value: "cauliflower", label: "Cauliflower", trigger: "256" },
       { value: "cabbage", label: "Cabbage", trigger: "256" },
       { value: "onion", label: "Onion", trigger: "256" },
       { value: "garlic", label: "Garlic", trigger: "256" },
       { value: "pea", label: "Pea", trigger: "256" },
       { value: "spanish", label: "Spanish", trigger: "256" },
       { value: "okra", label: "Okra", trigger: "256" },
       { value: "other_vegetables", label: "Other", trigger: "254" },
      ],
    },
    {
      id:"254",
      message:"Enter name of other Vegetables that you possess?",
      trigger:"255",
    },
    {
      id:"255",
     user:true,
      trigger:"256",
    },



    {
      id:"256",
      message:"Do you have Cucurbits?",
      trigger:"257",
    },
    {
      id:"257",
      options: [
       { value: "yes", label: "Yes", trigger: "258" },
       { value: "no", label: "No", trigger: "261" },//////
      ],
    },
    {
      id:"258",
      options: [
       { value: "muskmelon", label: "Musk Melon", trigger: "261" },
       { value: "watermolon", label: "Water Melon", trigger: "261" },
       { value: "bottleguard", label: "Bottle Guard", trigger: "261" },
       { value: "ridgeguard", label: "Ridge Guard", trigger: "261" },
       { value: "gherkin", label: "Gherkin", trigger: "261" },
       { value: "pumpkin", label: "Pumpkin", trigger: "261" },
       { value: "other_cucurbit",  label: "Other", trigger: "259" },
      ],
    },
    {
      id:"259",
      message:"Enter name of other Cucurbit that you possess?",
      trigger:"260",
    },
    {
      id:"260",
     user:true,
      trigger:"261",
    },



    {
      id:"261",
      message:"Do you have Spices?",
      trigger:"262",
    },
    {
      id:"262",
      options: [
       { value: "yes", label: "Yes", trigger: "263" },
       { value: "no", label: "No", trigger: "end" },//////
      ],
    },
    {
      id:"263",
      options: [
       { value: "cuminseeds", label: "Cumin Seeds", trigger: "end" },
       { value: "dhania", label: "Dhania", trigger: "end" },
       { value: "aniseeds", label: "Aniseeds", trigger: "end" },
       
       { value: "other_cereals", label: "Other", trigger: "end" },
      ],
    },
    {
      id:"264",
      message:"Enter name of other Spices that you possess?",
      trigger:"265",
    },
    {
      id:"265",
     user:true,
      trigger:"end",
    },










    



    















            






            {
              id: "end",
              message:
                "Thank you for having patience. Your data was submitted successfully!",
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;