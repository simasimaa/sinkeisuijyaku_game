'use strict';
{
//const btn=document.getElementById('btn');
  const mark=["♥","♦","♠","♣"]
  const number=[1,2,3,4,5,6,7,8,9,10,11,12,13]
  const total_num=mark.length*number.length
  let assigned_num;
  let nums=[];
  let flag_num=0;
  let num1=0;
  let num2=0;
  let status="not";
  let m_card=[];
  let memory;
  let memory_num;
  let count_clicked=0;
  let card_num;
  let card_mark;

  for(let i=1;i<=52;i++)
  {
    nums.push(1)
  }
  const div = document.createElement('div');
  const counter = document.getElementsByClassName('counter');
  div.className = 'counter';
  document.body.appendChild(div);//bodyの子要素にdivタグを追加
  let count=0;
  for(let i=0;i<total_num;i++)
  {
    let a=Math.floor(Math.random()*(52-count)+1);//1kara52madenorandomseisuu
    count+=1;
    let count1=0;
    for (let j=0;j<total_num;j++)
    {
      if (nums[j]===1)
      {
        count1+=1;
      }
      if (count1===a)
      {
        assigned_num=j;
        nums[j]=0;
        break;
      }
    }
    assigned_num=assigned_num+1;
    card_num=Math.floor(assigned_num/4)+1;
    card_mark=mark[parseInt(assigned_num-(card_num-1)*4)];
    if (card_num===14)
    {card_num=1;}

    const div = document.createElement('div');
    const card = document.getElementsByClassName('card');
    div.className = 'card';
    document.body.appendChild(div);//bodyの子要素にdivタグを追加

    card[i].card_num=card_num;
    card[i].card_mark=card_mark;

    //クリックされたとき
    card[i].addEventListener('click',()=>
    {
        if (card[i].className.indexOf('clicked')===-1)
        {
          card[i].classList.add('clicked');
          card[i].innerText=`${card[i].card_num}${card[i].card_mark}`;
          m_card.push(card[i].card_num);

          if (m_card.length%2===0)
          {
            if (card[i].card_num!==memory_num)
            {
              setTimeout(del, 1000);
              memory_num=0;
            }
            else
            {
              memory_num=0;
            }
          }
          else
          {
            memory=i;
            memory_num=card[i].card_num;
          }
          count_clicked+=1;
          counter[0].innerText=`回数：${count_clicked}`;
          if (check())
          {
            counter[0].innerText=`おめでとうございます：${count_clicked}回でした`
          }
        }
    });


    const del = function()
    {
      card[i].classList.remove('clicked');
      card[memory].classList.remove('clicked');
    };

    const check=function()
    {
      let count_check=0;

      for(let k=0;k<52;k++)
      {
        if (card[k].className.indexOf('clicked')!==-1)
        {
          count_check+=1;
        }
      }
      if (count_check===52)
      {
        return true;
      }
      else
      {
        return false;
      }

    };
  }
}
