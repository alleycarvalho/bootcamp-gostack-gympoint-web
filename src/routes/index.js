import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import StudentList from '~/pages/Student/List';
import StudentForm from '~/pages/Student/Form';
import PlanList from '~/pages/Plan/List';
import PlanForm from '~/pages/Plan/Form';
import EnrollmentList from '~/pages/Enrollment/List';
import HelpOrderList from '~/pages/HelpOrder/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />

      <Route path="/" exact component={Dashboard} isPrivate />

      <Route path="/students" exact component={StudentList} isPrivate />
      <Route path="/students/new" component={StudentForm} isPrivate />
      <Route path="/students/:id/edit" component={StudentForm} isPrivate />

      <Route path="/plans" exact component={PlanList} isPrivate />
      <Route path="/plans/new" component={PlanForm} isPrivate />

      <Route path="/enrollments" exact component={EnrollmentList} isPrivate />

      <Route path="/help-orders" exact component={HelpOrderList} isPrivate />

      <Route path="/" component={() => <h1>404 - Not Found</h1>} />
    </Switch>
  );
}
