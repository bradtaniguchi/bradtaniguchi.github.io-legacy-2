"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{2273:(E,h,t)=>{t.d(h,{q:()=>_});var r=t(4522),u=t(8053),a=t(7884),n=t(8623),e=t(9619),o=t(684);let _=(()=>{class s{constructor(i,g,c,l){this.githubUser=i,this.githubRepo=g,this.http=c,this.transferState=l}getPublicGists(){return this.transferState.useScullyTransferState("githubGists",this.http.get(`https://api.github.com/users/${this.githubUser}/gists`))}getUser(){return this.transferState.useScullyTransferState("githubUser",this.http.get(`https://api.github.com/users/${this.githubUser}`))}getRepoCommits(){return this.transferState.useScullyTransferState("githubRepoCommits",this.http.get(`https://api.github.com/repos/${this.githubUser}/${this.githubRepo}/commits`,{params:(new r.LE).append("per_page",5)}))}getLatestRepoCommit(){return this.getRepoCommits().pipe((0,u.U)(([i])=>i))}}return s.\u0275fac=function(i){return new(i||s)(e.LFG(n.L),e.LFG(a.b),e.LFG(r.eN),e.LFG(o.in))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);