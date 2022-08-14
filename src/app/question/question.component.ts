import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { animationFrameScheduler, interval, repeat } from 'rxjs';
import { QuestionService } from '../service/question.service';

 var  restartAnimation: any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent implements OnInit {
    public name:string="";
    public questionList: any = [];
    public currentQuestion:number = 0; 
    public points: number=0;
    counter=20;
    correctAnswer:number = 0;
    wrongAnswer:number = 0;
    interval$:any;
    isQuizfinish : boolean = false;
      constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getAllQuestion();
    this.startCounter();
  }
  getAllQuestion(){
     this.questionService.getQuestionJson()
     .subscribe(res=>{
      this.questionList = res.questions;
     }) 
  }
//  nextQuestion(){
//       this.currentQuestion++;
//  }
//  previousQuestion(){
//       this.currentQuestion--;
//  }
    nextQuestions(){
        this.currentQuestion ++;
    }
    previousQuestions(){
        this.currentQuestion --;
    }
      answer(currentQno:number,option:any){
        if(currentQno === this.questionList.length)
        {
          this.isQuizfinish= true;
          this.stopCounter(); 
        }
        if(option.correct){
          this.points+=10;
          this.correctAnswer++;
          setTimeout(() =>{
            this.resetCounter();
            this.currentQuestion++;
          },1000)
         
          
        }
        else{
          setTimeout(()=>{
            this.currentQuestion++;
            this.wrongAnswer++;
            this.resetCounter();   
          },1000)
            this.points -=10;
           
        }
      }
      startCounter(){
          this.interval$ =interval(1000)
          .subscribe(val=>{
            this.counter--;
            if(this.counter===0){
              this.currentQuestion++;
              this.counter=20;
              this.points-=10;
             
            }
          })
          setTimeout(() =>{
            this.interval$.unsubscribe();
          },600000)
      }
      stopCounter(){
        this.interval$.unsubscribe();
        this.counter=0;
      }
      resetCounter(){
          this.stopCounter();
          this.counter=20;
          this.startCounter();
          
      }
      reset(){
        this.resetCounter();
        this.getAllQuestion();
        this.points=0;
        this.counter=20;
        this.currentQuestion=0;
      }

      que(){
        restartAnimation();
      }
      }

