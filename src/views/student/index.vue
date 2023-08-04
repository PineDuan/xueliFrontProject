<template>
  <div>
    <header class="pageHeader">
      <div class="l">
        <div class="logo">
          <img src="../../assets/welcome/logo.png" alt="" />
        </div>
        <div class="avatar">
          <img src="../../assets/welcome/avatar.jpeg" alt="" />
        </div>
        <div class="account">
          <div class="nickname">学生用户昵称</div>
          <div class="motto">给自己写一段座右铭吧</div>
        </div>
      </div>
      <div class="r">
        <div class="info">
          <div class="stuinfo">
            <div class="stuno">学生编号：23052849</div>
            <div class="timetips">夜深了，注意休息哦。</div>
          </div>
          <div class="search">
            <el-input placeholder="请输入关键词" v-model="search">
              <span slot="append"><i class="el-icon-search"></i></span>
            </el-input>
          </div>
        </div>
        <div class="icons">
          <el-badge :value="1" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
          <i class="el-icon-setting"></i>
          <i class="el-icon-question"></i>
          <i class="el-icon-bell"></i>
        </div>
      </div>
    </header>
    <main class="pageContent">
      <div class="collapsewrap">
        <el-collapse
          class="collapse"
          v-model="collapseName"
          @change="handleChange"
        >
          <el-collapse-item v-for="item in 6" :key="item" :name="item">
            <template slot="title">
              <div class="collapseTitle">
                <img src="../../assets/welcome/book.png" alt="" />
                <span>学习</span>
              </div>
            </template>
            <div class="collapseContent">
              <a href="" class="collapseItem">
                <i class="el-icon-trophy"></i>
                <span>在学课程</span>
              </a>
              <a href="" class="collapseItem">
                <i class="el-icon-trophy"></i>
                <span>已修课程</span>
              </a>
              <a href="" class="collapseItem">
                <i class="el-icon-trophy"></i>
                <span>在学课程</span>
              </a>
              <a href="" class="collapseItem">
                <i class="el-icon-trophy"></i>
                <span>已修课程</span>
              </a>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="mainContent">
        <div class="mtop">
          <div class="cards">
            <el-card class="box-card">
              <div slot="header" class="clearfix cardheader">
                <span class="cardtit">温馨提示</span>
                <div class="cardtime">本次登录时间：2023年07月23 19:23</div>
              </div>
              <div class="card-con">
                <div class="echart" id="echart" ref="echartId"></div>
                <a href="" class="planning">
                  <img src="../../assets/welcome/plance.png" alt="" />
                  <p>查看教学计划</p>
                </a>
              </div>
            </el-card>
          </div>
          <div class="notice">
            <el-card class="box-card">
              <div slot="header" class="clearfix cardheader">
                <span class="cardtit">通知公告</span>
                <a href="" class="more">更多>></a>
              </div>
              <div class="card-news">
                <a href="" class="newsitem">
                  <div class="newstit">
                    <i class="el-icon-d-arrow-right"></i>
                    <span
                      >关于华南师范大学网络教育学院2023年秋季课程选课的通知</span
                    >
                  </div>
                  <div class="time">2023-07-12</div>
                </a>
                <a href="" class="newsitem">
                  <div class="newstit">
                    <i class="el-icon-d-arrow-right"></i>
                    <span
                      >华南师范大学高等学历继续教育2023级公共课程学员期末在线考试工作通知</span
                    >
                  </div>
                  <div class="time">2023-07-12</div>
                </a>
                <a href="" class="newsitem">
                  <div class="newstit">
                    <i class="el-icon-d-arrow-right"></i>
                    <span>关于2023年春季超学习期限学生退学名单的公示</span>
                  </div>
                  <div class="time">2023-07-12</div>
                </a>
                <a href="" class="newsitem">
                  <div class="newstit">
                    <i class="el-icon-d-arrow-right"></i>
                    <span>关于做好2019春季学生毕业与学籍管理工作的通知</span>
                  </div>
                  <div class="time">2023-07-12</div>
                </a>
                <a href="" class="newsitem">
                  <div class="newstit">
                    <i class="el-icon-d-arrow-right"></i>
                    <span
                      >关于华南师范大学网络教育公共基础课
                      2023年3月统考工作通知</span
                    >
                  </div>
                  <div class="time">2023-07-12</div>
                </a>
                <a href="" class="newsitem">
                  <div class="newstit">
                    <i class="el-icon-d-arrow-right"></i>
                    <span>关于华南师范大学网络教育公共基础课</span>
                  </div>
                  <div class="time">2023-07-12</div>
                </a>
              </div>
            </el-card>
          </div>
        </div>
        <div class="mcenter">
          <div class="course">
            <el-card class="box-card">
              <div slot="header" class="clearfix cardheader">
                <span class="cardtit">在线学习（直播及回放）</span>
                <a class="more">最新发布 <img src="../../assets/welcome/drapdown.png" alt=""></a>
              </div>
              <div class="coureslist">
                <div class="curesitem">
                  <div class="cover">
                    <img src="../../assets/welcome/c1.png" alt="" />
                    <span class="credit">3学分</span>
                  </div>
                  <div class="wrap">
                    <div class="cname">
                      <div class="ctit">法律职业伦理</div>
                      <div class="ccon">
                        <span>类别：公共必修课</span>
                        <span>编号：11061</span>
                      </div>
                      <div class="ccon">
                        <span>授课教师： 王梦如（责任）</span>
                        <span>姚远光（主持）</span>
                      </div>
                    </div>
                    <div class="cbtns">
                      <div class="tags">
                        <div class="tag">课程简介</div>
                        <div class="tag">课程答疑</div>
                        <div class="tag">课程通知</div>
                        <div class="tag">课程讨论</div>
                        <div class="tag">课程答疑</div>
                        <div class="tag">学习笔记</div>
                        <div class="tag">学习统计</div>
                        <div class="tag">课程评价</div>
                      </div>
                      <div class="play">
                        <router-link to="/student/detail"><button>直播 / 回看</button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="curesitem blue">
                  <div class="cover">
                    <img src="../../assets/welcome/c3.png" alt="" />
                    <span class="credit">3学分</span>
                  </div>
                  <div class="wrap">
                    <div class="cname">
                      <div class="ctit">H5应用设计</div>
                      <div class="ccon">
                        <span>类别：公共必修课</span>
                        <span>编号：11061</span>
                      </div>
                      <div class="ccon">
                        <span>授课教师： 王梦如（责任）</span>
                        <span>姚远光（主持）</span>
                      </div>
                    </div>
                    <div class="cbtns">
                      <div class="tags">
                        <div class="tag">课程简介</div>
                        <div class="tag">课程答疑</div>
                        <div class="tag">课程通知</div>
                        <div class="tag">课程讨论</div>
                        <div class="tag">课程答疑</div>
                        <div class="tag">学习笔记</div>
                        <div class="tag">学习统计</div>
                        <div class="tag">课程评价</div>
                      </div>
                      <div class="play">
                        <router-link to="/student/detail"><button>直播 / 回看</button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="curesitem red">
                  <div class="cover">
                    <img src="../../assets/welcome/c2.png" alt="" />
                    <span class="credit">3学分</span>
                  </div>
                  <div class="wrap">
                    <div class="cname">
                      <div class="ctit">法律职业伦理</div>
                      <div class="ccon">
                        <span>类别：公共必修课</span>
                        <span>编号：11061</span>
                      </div>
                      <div class="ccon">
                        <span>授课教师： 王梦如（责任）</span>
                        <span>姚远光（主持）</span>
                      </div>
                    </div>
                    <div class="cbtns">
                      <div class="tags">
                        <div class="tag">课程简介</div>
                        <div class="tag">课程答疑</div>
                        <div class="tag">课程通知</div>
                        <div class="tag">课程讨论</div>
                        <div class="tag">课程答疑</div>
                        <div class="tag">学习笔记</div>
                        <div class="tag">学习统计</div>
                        <div class="tag">课程评价</div>
                      </div>
                      <div class="play">
                        <router-link to="/student/detail"><button>直播 / 回看</button></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="calendar">
            <el-card class="box-card calendar-card">
              <div slot="header" class="clearfix cardheader">
                <span class="cardtit">教学日历</span>
                <div class="calenderType">
                  <div class="typeitem">系统日历</div>
                  <div class="typeitem typeuse">用户日历</div>
                </div>
              </div>
              <div class="caledarlayout">
                <el-calendar v-model="toDay" :first-day-of-week="7">
                  <template slot="dateCell" slot-scope="{ data }">
                    <p
                      :class="{
                        'is-selected': data.isSelected,
                        dotActive: true,
                        dot1: parseInt(data.day.split('-')[2]) == 21,
                        dot2: parseInt(data.day.split('-')[2]) == 10
                      }"
                    >
                      {{ data.day.split('-')[2] | delZero }}
                      <span class="dot"></span>
                    </p>
                  </template>
                </el-calendar>
              </div>
            </el-card>
            <el-card class="box-card charts">
              <div slot="header" class="clearfix cardheader">
                <span class="cardtit">学习轨迹</span>
                <div class="yearlist">
                  <div class="yearitem">21年</div>
                  <div class="yearitem">22年</div>
                  <div class="yearitem">23年</div>
                </div>
              </div>
              <div id="trajectoryCharts"></div>
            </el-card>
          </div>
        </div>
      </div>
    </main>
    <footer class="pageFooter">
      <div class="ulogo">
        <img src="../../assets/welcome/university-logo.png" alt="" />
      </div>
      <div class="fr">
        <div class="copyright">
          <p>主办单位:华南师范大学继续教育学院 粤ICP备05008875号</p>
          <p>
            地址: 广东省广州市天河区中山大道西55号| 邮政编码: 510631|院办:
            020-85210992|传真:020-85210991
          </p>
          <p>
            华南师范大学继续教育学院 版权所有|Copyright 0 2020 South China
            Normal University.All Rights Reserved
          </p>
        </div>
        <div class="linkicons">
          <a href="">
            <img src="../../assets/welcome/weixin.png" alt="" />
            <p>公众号</p>
          </a>
          <a href="">
            <img src="../../assets/welcome/email.png" alt="" />
            <p>院长信箱</p>
          </a>
          <a href="">
            <img src="../../assets/welcome/book.png" alt="" />
            <p>院刊杂志</p>
          </a>
        </div>
      </div>
      <div class="fbg"></div>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
function r() {
  return Math.random().toFixed(2) * 90 + 10
}
var data = [
  {
    name: '已取',
    value: 28
  },
  {
    name: '在学',
    value: 36
  },
  {
    name: '还需',
    value: 28
  }
]

var option = {
  //环形图中间文字
  title: {
    text: '学分',
    subtext: '',
    textStyle: {
      fontSize: 18,
      color: 'rgba(0,0,0,1)',
      fontWeight: 400
    },
    textAlign: 'center', //图例文字居中显示
    x: '48%', //距离左边的距离
    y: '31%' //距离上边的距离
  },
  //数据的颜色设置
  color: ['#1db124', '#00b3f9', '#f87272'],
  //图例设置
  legend: {
    bottom: 0,
    height: 20,
    itemGap: 20, //数据上下的距离
    itemWidth: 15, // 设置宽度
    data: data
  },
  series: [
    {
      radius: ['45%', '65%'], //第一个是中间圆的大小，第二个是外边圆的大小
      center: ['50%', '40%'], //左边的距离，上边的距离
      type: 'pie',
      label: {
        normal: {
          formatter: function (params) {
            return '{value|' + params.value + '学分}\n'
          },
          distanceToLabelLine: 0,
          padding: [-2, 0, 0, 0],
          rich: {
            value: {
              color: '#000'
            }
          }
        }
      },
      data: data
    }
  ]
}

var option1 = {
  color: ['#ff7676', '#2cabe3', '#26b42c'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      splitLine: {
        show: true
      },
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true
      }
    }
  ],
  series: [
    {
      name: '2021',
      type: 'line',
      //   stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 1
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255,118,118)'
          },
          {
            offset: 1,
            color: 'rgb(255,255,255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()]
    },
    {
      name: '2022',
      type: 'line',
      //   stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 1
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(44,171,227)'
          },
          {
            offset: 1,
            color: 'rgb(255,255,255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r(), r()]
    },
    {
      name: '2023',
      type: 'line',
      //   stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 1
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(38,180,44)'
          },
          {
            offset: 1,
            color: 'rgb(255,255,255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [r(), r(), r(), r(), r(), r(), r()]
    }
  ]
}
import * as echarts from 'echarts'
export default {
  name: 'home',
  data() {
    return {
      collapseName: [1],
      search: '',
      toDay: new Date()
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  },
  filters: {
    delZero(v) {
      console.log(v)
      return v.replace(/^0+/, '')
    }
  },
  mounted() {
    var sxechart = echarts.init(document.getElementById('echart'))
    sxechart.setOption(option, true)
    var trajectoryCharts = echarts.init(
      document.getElementById('trajectoryCharts')
    )
    trajectoryCharts.setOption(option1, true)
  }
}
</script>
<style lang="scss" scoped>
.pageHeader {
  background: #254fbb;
  color: #fff;
  font-size: 16px;
  height: 290px;
  display: flex;
  align-content: center;
  img {
    width: 100%;
  }
  .l {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .logo {
      width: 137px;
      margin-bottom: 20px;
    }
    .avatar {
      width: 116px;
      height: 116px;
      padding: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      border: 2px dashed #00ff00;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .account {
      text-align: center;
      .motto {
        font-size: 12px;
        color: #96b2fa;
      }
    }
  }
  .r {
    flex: 1;
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
    padding-right: 50px;
    .info {
      display: flex;
    }
    .stuinfo {
      margin-left: 100px;
    }
    .timetips {
      font-size: 24px;
      margin-top: 10px;
    }
    .search {
      width: 450px;
      margin-left: 132px;
      ::v-deep .el-input__inner {
        background: #1e47af;
        border: none;
        color: #7b9cf3;
      }
      ::v-deep .el-input__inner::-webkit-input-placeholder {
        color: #7b9cf3;
      }
      ::v-deep .el-input-group__append {
        background: #1e47af;
        border: none;
      }
    }
    .icons {
      i {
        font-size: 27px;
        margin-right: 20px;
      }
      .el-badge {
        vertical-align: top;
        ::v-deep .el-badge__content.is-fixed {
          right: 20px;
          top: 0px;
          transform: translate(0);
          padding: 0;
          width: 13px;
          height: 13px;
          font-size: 10px;
          line-height: 13px;
          background: #ff3333;
        }
      }
    }
  }
}
.pageContent {
  display: flex;
  .collapsewrap {
    width: 300px;
    background: #f4f7ff;
    padding: 30px;
    box-sizing: border-box;
    ::v-deep .el-collapse {
      border: none;
      .el-collapse-item {
        margin-bottom: 20px;
      }
      .el-collapse-item__header {
        background: #3464e0;
        color: #fff;
        border-radius: 8px;
        img {
          width: 31px;
          margin-right: 10px;
        }
      }
      .el-collapse-item__arrow {
        font-size: 18px;
      }
      .collapseTitle {
        font-size: 18px;
        display: flex;
        align-items: center;
        padding-left: 30px;
        span {
          font-size: 18px;
        }
      }
      .el-collapse-item__wrap {
        background: transparent;
        border: none;
      }
      .el-collapse-item__content {
        padding: 0;
        box-sizing: border-box;
      }
      .collapseContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        .collapseItem {
          width: 95px;
          height: 95px;
          background: #fff;
          border-radius: 8px;
          margin: 10px;
          text-align: center;
          text-decoration: none;
          box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
          color: #010101;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          i {
            font-size: 24px;
          }
          span {
            font-size: 14px;
            margin-top: 10px;
            text-decoration: none;
            display: block;
          }
        }
      }
    }
  }
  .mainContent {
    padding: 0 30px;
    position: relative;
    box-sizing: border-box;
    background: #fff;
    flex: 1;
    .box-card {
      border-radius: 8px;
      position: relative;
      overflow: visible;
      z-index: 2;
    }
    .mtop {
      position: relative;
      top: -90px;
      ::v-deep .el-card__body{
        height: 243px;
        overflow: hidden;
        box-sizing: border-box;
      }
      .box-card::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 95%;
        height: 100px;
        border-radius: 8px;
        z-index: 0;
        background: rgba(255, 255, 255, 0.38);
      }
      .box-card::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 30px;
        left: 50%;
        z-index: 0;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 100px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.38);
      }
    }

    ::v-deep .el-card__header {
      position: relative;
      z-index: 2;
      padding: 10px 20px;
    }
    ::v-deep .el-card__body {
      position: relative;
      z-index: 2;
    }
    .cardheader {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .cardtit {
        font-size: 26px;
        // font-weight: bold;
        position: relative;
        padding-left: 15px;
      }
      .cardtime {
        font-size: 16px;
      }
      .cardtit::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 6px;
        width: 7px;
        height: 27px;
        background: #254fbb;
      }
    }
    .mtop {
      display: flex;
      justify-content: space-between;
      .cards {
        ::v-deep .el-card__body {
          padding: 30px;
        }
        .card-con {
          display: flex;
          .echart {
            width: 300px;
            height: 200px;
            margin-right: 20px;
          }
          .planning {
            width: 150px;
            height: 198px;
            background: rgba(34, 156, 255, 0.1);
            border-radius: 10px;
            text-align: center;
            text-decoration: none;
            color: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            img {
              width: 103px;
              margin-left: 10px;
              margin-bottom: 15px;
            }
            p {
              font-size: 20px;
              margin: 0;
            }
          }
        }
      }
      .notice {
        margin-left: 40px;
        flex: 1;
        .more {
          color: #000;
          text-decoration: none;
          font-size: 16px;
        }
        .card-news {
          .newsitem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            color: #000;
            margin-bottom: 11px;
            .newstit {
              display: flex;
              align-items: center;
            }
            ::v-deep .el-card__body {
              padding: 8px !important;
            }
            i {
              color: #254fbb;
              font-weight: bold;
            }
            .time {
              color: #889bcc;
              font-size: 18px;
            }
            span {
              display: inline-block;
              width: 590px;
              font-size: 18px;
              white-space: nowrap;
              overflow: hidden; //超出的文本隐藏
              text-overflow: ellipsis; //溢出用省略号显示
            }
          }
        }
      }
    }
    .mcenter {
      margin: -50px 0 30px 0;
      display: flex;
      justify-content: space-between;
      .calendar {
        width: 400px;
        .calendar-card{
          border-radius: 8px;
          overflow: hidden;
        }
        .calenderType {
          display: flex;
          align-items: center;
          .typeitem {
            position: relative;
            color: #d43a3a;
            font-size: 18px;
            padding-left: 10px;
            margin-left: 20px;
          }
          .typeitem::before {
            content: '';
            width: 10px;
            height: 10px;
            background: #d43a3a;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .typeuse {
            color: #1db124;
          }
          .typeuse::before {
            background: #1db124;
          }
        }
        ::v-deep {
          .el-card__body {
            padding: 0 !important;
          }
          .el-calendar-table thead th {
            font-size: 16px;
          }
          .el-button span {
            font-size: 16px;
          }
          .el-calendar__title {
            font-size: 22px;
          }
          .el-calendar__body {
            padding-bottom: 0;
          }
          .el-calendar-table td {
            border: none;
          }
          p {
            margin: 0;
            padding: 0;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            position: relative;
          }
          .el-calendar-table .el-calendar-day {
            text-align: center;
            height: 40px;
            padding: 0;
          }
          .is-selected {
            border-radius: 10px;
            background: #5ea9dd;
            color: #fff;
          }
          .dotActive {
            .dot {
              position: absolute;
              top: 2px;
              right: 5px;
              display: block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }
          }
          .dot1 {
            color: #d43a3a;
          }
          .dot1 .dot {
            background: #d43a3a;
          }
          .dot2 {
            color: #1db124;
          }
          .dot2 .dot {
            background: #1db124;
          }
        }
        .charts {
          margin-top: 30px;
          .yearlist {
            display: flex;
            align-items: center;
            .yearitem {
              position: relative;
              padding-left: 15px;
              margin-left: 15px;
              font-size: 16px;
            }
            .yearitem::after {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(0, -50%);
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: red;
            }
            .yearitem:nth-child(1)::after {
              background: #ff7676;
            }
            .yearitem:nth-child(2)::after {
              background: #2cabe3;
            }
            .yearitem:nth-child(3)::after {
              background: #26b42c;
            }
          }
          #trajectoryCharts {
            width: 100%;
            height: 325px;
          }
        }
      }
      .course {
        flex: 1;
        margin-right: 30px;
        .more {
          text-decoration: none;
          color: #254fbb;
          font-size: 16px;
          display:flex;
          align-items: center;
          cursor: pointer;
          img{
            margin-left: 5px;
          }
        }
        ::v-deep .el-card__header {
          border-bottom: none;
        }
        ::v-deep .el-card__body {
          padding-bottom: 0;
        }
        .coureslist {
          .curesitem {
            display: flex;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #e8e8e8;
            margin-bottom: 20px;
            box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
            background: #fffbef;
            padding: 20px;
            box-sizing: border-box;
            .cover {
              position: relative;
              border-radius: 10px;
              overflow: hidden;
              height: 186px;
              flex: 0 0 329px;
              img {
                width: 100%;
                height: 100%;
              }
              .credit {
                position: absolute;
                left: 10px;
                top: 10px;
                color: #fff;
                padding: 3px 5px;
                border-radius: 3px;
                font-size: 18px;
                background: #ea3553;
              }
            }
            .wrap {
              position: relative;
              margin-left: 15px;
              padding: 0 10px;
            }
            .cname {
              padding-left: 10px;
              margin-bottom: 10px;
              .ctit {
                font-size: 28px;
                font-weight: bold;
              }
              .ccon {
                color: #747474;
                font-size: 18px;
                span {
                  margin-right: 20px;
                }
              }
            }
            .wrap::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0px;
              width: 4px;
              height: 150px;
              background: #995d33;
            }
            .cbtns {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .play {
                flex: 0 0 130px;
                button {
                  background: #b08506;
                  border: none;
                  color: #fff;
                  width: 100%;
                  line-height: 72px;
                  font-size: 20px;
                  font-weight: bold;
                  border-radius: 10px;
                  cursor: pointer;
                  box-shadow: 0 0px 20px rgba(167, 126, 3, 0.7);
                }
              }
              .tags {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                .tag {
                  padding: 5px 10px;
                  font-size: 16px;
                  border-radius: 5px;
                  border: 1px solid #d1ad91;
                  color: #995d33;
                  cursor: pointer;
                  margin: 5px;
                }
              }
            }
          }
          .blue {
            background: #f4fbff;
            .wrap::before {
              background: #2c7bc2;
            }
            .wrap {
              .tags {
                .tag {
                  color: #2c7bc2;
                  border-color: #2c7bc2;
                }
              }
            }
            .cbtns {
              .play {
                button{
                  background: #3464e0;
                  box-shadow: 0 0px 20px rgba(52,100,224, 0.7);
                }
              }
            }
          }
          .red {
            background: #ffefef;
            .wrap::before {
              background: #890000;
            }
            .wrap {
              .tags {
                .tag {
                  color: #890000;
                  border-color: #890000;
                }
              }
            }
            .cbtns {
              .play {
                button{
                  background: #bd0b00;
                  box-shadow: 0 0px 20px rgba(189,11,0, 0.7);
                }
              }
            }
          }
        }
      }
    }
  }
}
.pageFooter {
  height: 203px;
  background: linear-gradient(to bottom, #254fbb, #4466d8);
  position: relative;
  display: flex;
  .fbg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 15px;
    background: #2b49af;
  }
  .ulogo {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 5px 0;
      font-size: 16px;
    }
    .copyright {
      color: #fff;
      margin-left: 100px;
    }
    .linkicons {
      display: flex;
      align-items: center;
      text-align: center;
      margin-left: 300px;
      a {
        text-decoration: none;
        color: #fff;
        margin-left: 30px;
      }
      img {
        width: 40px;
        height: 40px;
        padding: 10px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
    }
  }
}
</style>
