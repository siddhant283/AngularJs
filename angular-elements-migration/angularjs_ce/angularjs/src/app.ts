import * as angular from 'angular';
import { bookingsComponent } from './bookings.component';

export default angular
                .module('app', [])
                .component('bookings', bookingsComponent)
                .name;

