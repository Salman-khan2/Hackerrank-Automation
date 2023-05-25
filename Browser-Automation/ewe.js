const puppeteer=require("puppeteer");

// include the problem solution file
const codeobj=require('./codes.js');

let page;

// Launch the chromium Browser
let browseropenpromise=puppeteer.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"]
})
browseropenpromise.then(function (browser){
    let brwoserArraypromise=browser.pages();
    return brwoserArraypromise;
}).then(function (browserPages){
    page=browserPages[0];
    let gotopromise=page.goto("https://www.hackerrank.com/auth/login");
     return gotopromise;
}).then(function (){
    let waitingselector=page.waitForSelector('input[id="input-1"]');
    return waitingselector;
}).then(function (){
    let keytypepromise=page.type('input[id="input-1"]',"anaskhan100mit@gmail.com");
    return keytypepromise;
}).then(function (){
    let slectorwaitpromise=page.waitForSelector('input[id="input-2"]');
    return slectorwaitpromise;
}).then(function (){
    let keypromise=page.type('input[id="input-2"]',"Anas@1234");
    return keypromise;
}).then(function (){
    let loginselectopromise=page.waitForSelector('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled')
    return loginselectopromise;
}).then(function (){
    let msclickpromise=page.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return msclickpromise;
}).then(function (){
    let cppwtpromise=page.waitForSelector('[data-automation="algorithms"]');
    return cppwtpromise;
}).then(function (){
    let clickpromise=page.click('[data-automation="algorithms"]');
    return clickpromise;
}).then(function (){
    let waitclick=page.waitForSelector('input[value="warmup"]');
    return waitclick;
}).then(function (){
    let sacclikc=page.click('input[value="warmup"]');
    return sacclikc;
}).then(function (){
   let allchalengesArray=page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
   return allchalengesArray
}).then(function (questionArr){
    console.log("Total question ",questionArr.length)
    let questionwillbesolved=questionSolver(page,questionArr[1],codeobj.answers[0])
    return questionwillbesolved
})


// function use fro wait for the selectors 

function wiatAndClick(selector,cpage){
    return new Promise(function(resolve,reject){
        let waitmodelpromise=cpage.waitForSelector(selector)
        waitmodelpromise.then(function(){
            let clickmodelpromise=cpage.click(selector)
            return clickmodelpromise
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}



// function for use to pick the question and solve


function questionSolver(page,question,answer){
     return new Promise(function (resolve, reject){
        let questionwillbeclicked=question.click()
        questionwillbeclicked.then(function(){
            let ediytiorpromise=wiatAndClick('.monaco-editor.no-user-select.vs',page)
            return ediytiorpromise
        }).then(function (){
            return wiatAndClick('input[type="checkbox"]',page)
        }).then(function (){
            return page.waitForSelector('textarea.custominput',page)
        }).then(function(){
            return page.type('textarea.custominput',answer,{delay:12})
        }).then(function(){
            let ctrlpressed=page.keyboard.down("Control")
            return ctrlpressed
        }).then(function(){
            let Aispressed=page.keyboard.press('A',{delay:100})
            return Aispressed
        }).then(function(){
            let Xispressed=page.keyboard.press('X')
            return Xispressed
        }).then(function(){
            console.log("Hiiiiii")
        }).then(function(){
            let ctrlup=page.keyboard.up('Control')
            return ctrlup
        }).then(function (){
            let maineditor=wiatAndClick('.monaco-editor.no-user-select.vs',page);
            return maineditor
        }).then(function (){
            let ctrlpressed=page.keyboard.down("Control")
            return ctrlpressed
        }).then(function(){
            let Aispressed=page.keyboard.press('A',{delay:100})
            return Aispressed
        }).then(function(){
            let Vispressed=page.keyboard.press("V")
            return Vispressed
        }).then(function (){
             return wiatAndClick('button.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',page)
        })
     })
}
