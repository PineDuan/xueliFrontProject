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
                <div class="todolist">
                  <div class="todotit">
                    <p>待办事项</p>
                    <div class="todotype">
                      <span class="sys">系统</span><span class="use">用户</span>
                    </div>
                  </div>
                  <div class="todowrap">
                    <a href="" class="todoitem sys"
                      >本月28日下午3点钟您有一场直播</a
                    >
                    <a href="" class="todoitem sys"
                      >6月14号之前记得要组好三套试卷</a
                    >
                    <a href="" class="todoitem use">上传教学材料给学生</a>
                    <a href="" class="todoitem use">看查课酬到帐情况</a>
                  </div>
                  <div class="todoadd">
                    <img src="../../assets/welcome/add.png" alt="" />
                  </div>
                </div>
                <a href="" class="planning">
                  <img src="../../assets/welcome/plance.png" alt="" />
                  <p>课程教学计划</p>
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
          <div class="plantab">
            <el-card class="box-card">
              <div slot="header" class="cardheader">
                <span class="cardtit">课程教学计划</span>
                <span class="sort">点击表头中的各字段可进行排序</span>
              </div>
              <el-table
                :data="tableData"
                class="table"
                :default-sort="{ prop: 'date', order: 'descending' }"
              >
                <el-table-column prop="semester" label="学期" sortable>
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="授课时间"
                  sortable
                  width="220"
                >
                </el-table-column>
                <el-table-column prop="major" label="专业" sortable>
                </el-table-column>
                <el-table-column prop="grade" label="年级" sortable>
                </el-table-column>
                <el-table-column prop="class" label="班级" sortable>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="课程名称"
                  sortable
                  width="110"
                >
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="课程类型"
                  sortable
                  width="100"
                >
                </el-table-column>
                <el-table-column prop="duration" label="时长" sortable>
                </el-table-column>
                <el-table-column prop="other" label="其他" sortable>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleClick(scope.row)"
                      type="text"
                      size="small"
                      class="show"
                      >{{
                        scope.row.type == '在线直播'
                          ? '去直播'
                          : '查&nbsp;&nbsp;&nbsp;&nbsp;看'
                      }}
                      <img src="../../assets/welcome/drapdown.png" alt=""
                    /></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </div>
          <div class="live">
            <el-card class="box-card">
              <div slot="header" class="cardheader">
                <span class="cardtit">课程直播教学</span>
                <span class="sort">点击表头中的各字段可进行排序</span>
              </div>
              <div class="livelist">
                <div class="liveitem">
                  <div class="livecard">
                    <div class="card_l">
                      <div class="livetit">
                        <span class="type">精讲2.1</span>
                        <div class="flag">
                          <img
                            src="../../assets/welcome/select.png"
                            alt=""
                          />已结束
                        </div>
                      </div>
                      <div class="livecon">
                        <p><span>直播时间：</span>2023-08-23 09：00-12：00</p>
                        <p><span>授课老师：</span>课程责任老师</p>
                      </div>
                    </div>
                    <div class="card_r">
                      <el-button type="primary" class="play"
                        >观看回放</el-button
                      >
                    </div>
                  </div>
                  <div class="courseinfo">
                    <div class="cname">多媒体设计与制作 精讲2.1</div>
                    <div class="detail">
                      <p><span> 专业：</span>计算机科学 </p>
                      <p> <span>班级：</span>广州达德 </p>
                      <p><span> 班级人数：</span>50人 </p>
                      <p><span> 年级：</span>2023上 </p>
                    </div>
                  </div>
                </div>
              </div>
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
export default {
  name: 'home',
  data() {
    return {
      collapseName: [1],
      search: '',
      toDay: new Date(),
      tableData: [
        {
          semester: '2023上',
          date: '2023年9月08日 14:30-17:00',
          major: '教育学',
          grade: '2021',
          class: '广州达德',
          name: '班级管理概论',
          type: '在线直播',
          duration: '1.5小时',
          other: '其他'
        },
        {
          semester: '2023上',
          date: '2023年9月08日 14:30-17:00',
          major: '教育学',
          grade: '2022',
          class: '广州达德',
          name: '班级管理概论',
          type: '录播课',
          duration: '1.0小时',
          other: '其他'
        },
        {
          semester: '2023上',
          date: '2023年9月08日 14:30-17:00',
          major: '教育学',
          grade: '2019',
          class: '广州达德',
          name: '班级管理概论',
          type: '线下课',
          duration: '2.0小时',
          other: '其他'
        }
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
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
      ::v-deep .el-card__body {
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
        font-weight: bold;
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
          padding: 20px;
        }
        .card-con {
          display: flex;
          .todolist {
            background: rgba(34, 156, 255, 0.1);
            border-radius: 10px;
            color: #000;
            position: relative;
            margin-right: 20px;
            .sys {
              color: #f87272;
            }
            .sys::before {
              background: #f87272;
            }
            .use {
              color: #1db124;
            }
            .use::before {
              background: #1db124;
            }
            .todotit {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px;
              p {
                font-size: 22px;
                font-weight: bold;
              }
              .todotype {
                span {
                  position: relative;
                  font-size: 16px;
                  margin-left: 20px;
                  padding-left: 10px;
                }
                span::before {
                  content: '';
                  display: block;
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  left: 0;
                  top: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            }
            .todowrap {
              padding: 0 20px;
              .todoitem {
                font-size: 17px;
                display: block;
                text-decoration: none;
                color: #000;
                position: relative;
                padding-left: 10px;
                margin-bottom: 10px;
              }
              .todoitem::before {
                content: '';
                display: block;
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);
              }
            }
            .todoadd {
              position: absolute;
              right: 0px;
              bottom: 0px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
          .planning {
            width: 150px;
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
      margin: -60px 0 30px 0;
      .plantab {
        width: 100%;
        .sort {
          color: #254fbb;
          font-size: 18px;
        }
        .table {
          font-size: 18px;
        }
        ::v-deep {
          .el-table {
            border-radius: 15px 15px 0 0;
            overflow: hidden;
            border: 1px solid #254fbb;
            border-bottom: 8px solid #254fbb;
          }
          .show {
            color: #254fbb;
            font-size: 18px;
            span {
              display: flex;
              align-items: center;
            }
            img {
              margin-left: 10px;
              transform: rotate(-90deg);
            }
          }
          .cell {
            text-align: center;
          }
          .el-table thead tr {
            background: linear-gradient(to right, #007dff 70%, #00c7de);
          }
          .el-table tbody tr:nth-of-type(odd) {
            background: #e7f2ff;
          }

          .el-table th.el-table__cell {
            background: transparent;
            color: #fff;
          }
        }
      }
      .live {
        margin-top: 30px;
        .liveitem {
          .livecard {
            width: 990px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            box-sizing: border-box;
            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            .livetit {
              display: flex;
              align-items: center;
              font-size: 24px;
              margin-bottom: 20px;
              .flag {
                margin-left: 20px;
                background: #e1e6f0;
                color: #97a6bc;
                border-radius: 90px;
                display: flex;
                align-items: center;
                padding: 5px 10px;
                font-size: 16px;
                font-weight: bold;
                img {
                  width: 20px;
                }
              }
            }
            .livecon {
              color: #41454a;
              p {
                margin-bottom: 5px;
                span {
                  color: #97a6bc;
                }
              }
            }
            .play {
              background: linear-gradient(to right, #5a82f7, #3a61f4);
              padding: 15px 30px;
              margin-right: 20px;
              border: none;
              box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
            }
          }
        }
        .courseinfo{
          padding:20px;
          .cname{
            font-size: 24px;
            margin-bottom: 20px;
          }
          .detail{
            color: #5b779f;
            display: flex;
            p{
              margin-right: 30px;
              font-size: 20px;
            }
            span{
              color: #97a6bc;
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
