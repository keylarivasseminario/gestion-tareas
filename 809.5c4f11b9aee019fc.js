"use strict";(self.webpackChunkgestion_tareas=self.webpackChunkgestion_tareas||[]).push([[809],{4809:(M,m,a)=>{a.r(m),a.d(m,{MantenimientoEdicionModule:()=>f});var p=a(1531),o=a(4828),d=a(9397),e=a(5879),u=a(7100),h=a(3751);let v=(()=>{class n{constructor(){this.saveTask=new e.vpe,this.action="UPDATE"}onSaveTask(i){this.saveTask.emit(i)}static#t=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-mantenimiento-edicion"]],inputs:{task:"task"},outputs:{saveTask:"saveTask"},decls:1,vars:2,consts:[[3,"dataForm","action","saveTask"]],template:function(t,s){1&t&&(e.TgZ(0,"app-mantenimiento-form-container",0),e.NdJ("saveTask",function(r){return s.onSaveTask(r)}),e.qZA()),2&t&&e.Q6J("dataForm",s.task)("action",s.action)},dependencies:[h.m]})}return n})();const l=[{path:"",component:(()=>{class n{constructor(i,t,s){this.route=i,this.stepperService=t,this.router=s,this.route.params.subscribe(c=>{this.taskID=c.id,this.getTaskToEdit()})}getTaskToEdit(){this.stepperService.tasksList$().pipe((0,d.b)(i=>{let t={...i[this.getTaskId()]};t.expirationDate=new Date(t.expirationDate),this.task=t})).subscribe()}onSaveTask(i){this.stepperService.updateTask(i,this.getTaskId()),this.router.navigate(["tarea/listado"])}getTaskId(){return this.taskID-1}static#t=this.\u0275fac=function(t){return new(t||n)(e.Y36(o.gz),e.Y36(u.M),e.Y36(o.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-mantenimiento-edicion-container"]],decls:1,vars:1,consts:[[3,"task","saveTask"]],template:function(t,s){1&t&&(e.TgZ(0,"app-mantenimiento-edicion",0),e.NdJ("saveTask",function(r){return s.onSaveTask(r)}),e.qZA()),2&t&&e.Q6J("task",s.task)},dependencies:[v]})}return n})()}];let T=(()=>{class n{static#t=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#e=this.\u0275inj=e.cJS({imports:[o.Bz.forChild(l),o.Bz]})}return n})();var k=a(6814);let f=(()=>{class n{static#t=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#e=this.\u0275inj=e.cJS({providers:[k.uU],imports:[T,p.u]})}return n})()}}]);