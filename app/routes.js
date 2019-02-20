/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
                               <HashRouter>
            <Switch>
            <Route exact path={"/"} component={Class}></Route>
            <Route  path={"/class"} component={ClassList}></Route>
            <Route  path={"/fee"} component={Fee}></Route>
            <Route  path={"/adds"} component={AddStudent}></Route>
            <Route  path={"/addf"} component={AddFather}></Route>
            <Route  path={"/addm"} component={AddMother}></Route>
            <Route  path={"/addg"} component={AddGuardian}></Route>
            <Route  path={"/addmed"} component={AddMedical}></Route>
            <Route  path={"/beginner"} component={Beginner}></Route>
            <Route  path={"/pp1"} component={PP1}></Route>
            <Route  path={"/pp2"} component={PP2}></Route>
            <Route  path={"/grade1"} component={Grade1}></Route>
            <Route  path={"/grade2"} component={Grade2}></Route>
            <Route  path={"/addedpopup"} component={AddedStudent}></Route>
            <Route  path={"/added"} component={AddedS}></Route>
            <Route  path={"/abs/:id"} component={AboutStudent}></Route>
            <Route  path={"/abf/:id"} component={AboutFather}></Route>
            <Route  path={"/abm/:id"} component={AboutMother}></Route>
            <Route  path={"/abg/:id"} component={AboutGaurdian}></Route>
            <Route  path={"/abmed/:id"} component={AboutMedical}></Route>
            <Route  path={"/eds/:id"} component={EditStudent}></Route>
            <Route  path={"/edf/:id"} component={EditFather}></Route>
            <Route  path={"/edm/:id"} component={EditMother}></Route>
            <Route  path={"/edg/:id"} component={EditGuardian}></Route>
            <Route  path={"/edmed/:id"} component={EditMedical}></Route>
            <Route  path={"/abfees/:id"} component={StudentFeesPage}></Route>
            <Route  path={"/edfeebasic/:id"} component={EditStudentFeesBasic}></Route>
            <Route  path={"/edfeeoptional/:id"} component={EditStudentFeesOptional}></Route>
            <Route  path={"/edfeetransport/:id"} component={EditStudentFeeTransport}></Route>
            <Route  path={"/addsfee"} component={AddStudentFees}></Route>
            <Route  path={"/addoptionalfee"} component={AddOptionalFees}></Route>
            <Route  path={"/addtransportfee"} component={AddTransportFees}></Route>
            <Route  path={"/class-email-selected"} component={ClassEmailSelected}></Route>
            <Route  path={"/class-email-recipients"} component={ClassEmailRecipients}></Route>
            <Route  path={"/retrieve-emails"} component={RetrieveClassEmails}></Route>
            <Route  path={"/retrieved-emails"} component={EmailsRetrieved}></Route>
            <Route  path={"/edit-class-fee-structure"} component={EditClassFeeStructure}></Route>
            <Route  path={"/class-fee-structure"} component={ClassFeeStructure}></Route>
            <Route  path={"/new-student-added"} component={NewStudentAdded}></Route>
            <Route path={"/beginner-fee-structure"} component={BeginnerFeeStructure}></Route>
            <Route path={"/student-email-selected"} component={StudentEmailSelected}></Route>
            </Switch>
            </HashRouter>
  </App>
);
