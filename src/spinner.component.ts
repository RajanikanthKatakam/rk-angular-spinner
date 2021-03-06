﻿import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'app-rk-spinner',
    encapsulation: ViewEncapsulation.None,
    styles: [`@-moz-keyframes rotate-spinner {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
      @-o-keyframes rotate-spinner {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes rotate-spinner {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
      @keyframes rotate-spinner {
        0% {
          transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
        }
      }
      @-moz-keyframes spinner-text-opacity {
        0%,
        20% {
          opacity: 0;
        }
      
        50% {
          opacity: 1;
        }
      
        100% {
          opacity: 0;
        }
      }
      @-o-keyframes spinner-text-opacity {
        0%,
        20% {
          opacity: 0;
        }
      
        50% {
          opacity: 1;
        }
      
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes spinner-text-opacity {
        0%,
        20% {
          opacity: 0;
        }
      
        50% {
          opacity: 1;
        }
      
        100% {
          opacity: 0;
        }
      }
      @keyframes spinner-text-opacity {
        0%,
        20% {
          opacity: 0;
        }
      
        50% {
          opacity: 1;
        }
      
        100% {
          opacity: 0;
        }
      }
      
      #rk-angular-spinner .spinner {
          height: 110px;
          position: relative;
          width: 110px;
          border-radius: 100%;
        }
      #rk-angular-spinner .spinner-container {
        height: 115px;
        position: relative;
        width: 115px;
        border-radius: 100%;
      }
      
      #rk-angular-spinner .spinner-container {
        margin: 40px auto;
      }
      
      #rk-angular-spinner .spinner {
        border: 2px solid transparent;
        border-color: transparent #00ACDD transparent #00ACDD;
        -moz-animation: rotate-spinner 1.5s linear 0s infinite normal;
        -moz-transform-origin: 50% 50%;
        -o-animation: rotate-spinner 1.5s linear 0s infinite normal;
        -o-transform-origin: 50% 50%;
        -webkit-animation: rotate-spinner 1.5s linear 0s infinite normal;
        -webkit-transform-origin: 50% 50%;
        animation: rotate-spinner 1.5s linear 0s infinite normal;
        transform-origin: 50% 50%;
      }
      
      #rk-angular-spinner .spinner-container:hover .spinner {
        border-color: transparent #E45635;
      }
      
      #rk-angular-spinner .spinner-container .spinner,
      #rk-angular-spinner .spinner-container:hover .spinner {
        -webkit-transition: all .5s ease-in-out;
        -moz-transition: all .5s ease-in-out;
        -ms-transition: all .5s ease-in-out;
        -o-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
      }
      
      #spinner-text {
        -moz-animation: spinner-text-opacity 2s linear 0s infinite normal;
        -o-animation: spinner-text-opacity 2s linear 0s infinite normal;
        -webkit-animation: spinner-text-opacity 2s linear 0s infinite normal;
        animation: spinner-text-opacity 2s linear 0s infinite normal;
        color: #00ACDD;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        font-weight: 700;
        margin-top: 45px;
        opacity: 0;
        position: absolute;
        text-align: center;
        top: 0;
        width: 105px;
      }
      
      #rk-angular-spinner .overlay {
        position: absolute;
        left: 0;
        right: 0;
        background-color: #000;
        overflow: hidden;
        opacity: .7;
        width: 100%;
        height: 100%;
        transition: .5s;
        z-index: 99999;
        top: 0;
      }
      
      #rk-angular-spinner .overlay-body {
        white-space: nowrap;
        position: fixed;
        overflow: hidden;
        top: 50%;
        left: 50%;
        opacity: 1 !important;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        z-index: 99999;
      }
      `],
    template: `
    <div id="rk-angular-spinner" *ngIf="showLoader">
        <div class="overlay">
        </div>
        <div class="overlay-body">
            <div class="spinner-container">
                <div class="spinner"></div>
                <div id="spinner-text"> {{textLabel || 'Loading..'}} </div>
            </div>
        </div>
    </div>`
})
export class SpinnerComponent implements AfterViewInit, OnInit {
    @Input('text') textLabel: string;

    public showLoader = false;
    constructor(private cdr: ChangeDetectorRef, private _spinnerService: SpinnerService) {
    }

    public ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    public ngOnInit(): void {
        // Show or Hide Loader
        this._spinnerService.spinnerEmitter.subscribe(show => {
            setTimeout(() => this.showLoader = show || false, 0);
        },
            (err) => { console.error('SpinnerEmitter-', err); }
        );
    }
}
