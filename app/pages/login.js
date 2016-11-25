'use strict';
import React, {
  Component,
  Text,
  View,
  Platform,
  TextInput,
  Image,
  AlertIOS,
} from 'react-native';

import {connect} from 'react-redux';
import ModalBox from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';
import {login, skipLogin} from '../actions/user';
import commonStyle from '../styles/common';
import loginStyle from '../styles/login';
// TODO
