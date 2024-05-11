import React from "react";
import { View } from "react-native";
import { RoundedFooter } from "../../components/roundedFooter/styles";

import {Content} from "./styles"

const img = require('../../assets/background.png');

function UserProfile() {
  return(
      <>
        <Content source={img} >

        </Content>
        <RoundedFooter>

        </RoundedFooter>
      </>
  );
};

export default UserProfile;