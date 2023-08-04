<template>
  <div class="pagewrap">
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
    <main>
      <div class="time">学习时长：<span>00:20:43</span></div>
      <el-tabs class="tabs">
        <el-tab-pane label="课程简介">
          <div class="con">
            <div class="conl">
              <div class="courseinfo">
                <div class="cover">
                  <img src="../../assets/welcome/c1.png" alt="" />
                  <p>法律职业伦理</p>
                </div>
                <div class="auther">
                  <div class="teacher">
                    <span>授课教师</span>
                    姚远光
                  </div>
                  <div class="key">
                    <span>关键词</span>
                    <div class="tags">
                      <el-tag>形势</el-tag>
                      <el-tag type="success">政策</el-tag>
                      <el-tag type="info"
                        >习近平新时代中国特色社会主义思想</el-tag
                      >
                      <el-tag type="warning">高校思想政治</el-tag>
                      <el-tag type="danger">理论课</el-tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="conr">
              <div class="tit">课程介绍</div>
              <div id="w-e-textarea-1" data-slate-editor="" data-slate-node="value" suppresscontenteditablewarning="" role="textarea" spellcheck="true" autocorrect="true" autocapitalize="true" contenteditable="true"><p id="w-e-element-32" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-33" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">《形势与政策》课是理论武装时效性、释疑解惑针对性、教育引导综合性都很强的一门高校思想政治理论课，是门综合性与应用性很强的思想政治理论课，是高校思想政治理论课的重要组成部分。本门课通过开展时事讲座、线上学习等授课方式，帮助大学生正确认识新时代国内外形势，深刻领会党的十八大以来党和国家取得的历史性成就、发生的历史性变革、面临的历史性机遇和挑战，是第一时间推动党的理论创亲成果进教材进课堂进学生头脑，引导大学生正确理解党和国家的基本理念、基本路线、基本方略的重要渠道。</span></span></span></p></div>
              <div class="tit">教师简介</div>
              <div class="tit">教学大纲</div>
              <div id="w-e-textarea-1" data-slate-editor="" data-slate-node="value" suppresscontenteditablewarning="" role="textarea" spellcheck="true" autocorrect="true" autocapitalize="true" contenteditable="true"><p id="w-e-element-47" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-48" data-slate-node="text"><span data-slate-leaf="true"><strong class="token bold"><span data-slate-string="true">一、课程定位课</span></strong></span></span></p><p id="w-e-element-49" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-50" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">程根据教育部社科司每学期下发的形势与政策教育教学要点，以国际国内的新变化和广大师生关注的难点热点问题为专题的内容依据，进行习近平新时代中国特色社会主义思想和马克思主义的原则立场方法教育。本学期课程将围绕中国经济发展新格局、全面从严治党、决胜脱贫攻坚、两岸关系、中美关系等专题进行解读，旨在帮助广大青年学子深入学习领会习近平新时代中国特色社会主义思想，树立马克思主义的立场、观点和方法，树牢“四个意识”坚定“四个自信”坚决做到"“两个维护”，成为能够担当民族复兴大任的时代新人。</span></span></span></p><p id="w-e-element-106" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-52" data-slate-node="text"><span data-slate-leaf="true"><strong class="token bold"><span data-slate-string="true">二、授课目标</span></strong></span></span></p><p id="w-e-element-53" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-54" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">要教育引导学生正确认识世界和中国发展大势，从我们党探索中国特色社会主义历史发展和伟大实践中，认识和把握人类社会发展的历史必然性，认识和把握中国特色社会主义的历史必然性，不断树立为共产主义远大理想和</span></span></span></p><p id="w-e-element-36" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-11" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">中国特色社会主义共同理想而奋义的信念和信心。要教育引导学生正确认识中国特色和国际比较，全面客观认识当代中国、看待外部世果。要教育引导学生正确认识时代责任和历史使命，用中国梦数扬青春梦，为学生点高理想的灯、照亮前行的路,激励学生自觉把个人的理想追求融入国家和民族的事业中，勇做走在时代前列的奋进者、开拓者。要教育引导学生正确认识远大抱负和脚踏实地，珍惜留华、脚踏实地，把远大抱负落实到实际行动中，让勤奋学习成为青春飞扬的动力，让增长本领成为青春搏击的能量。</span></span></span></p><p id="w-e-element-107" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-108" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">完成本门课的学习之后，学生能够取得如下目标:</span></span></span></p><p id="w-e-element-109" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-110" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">    1.知识目标:是指通过该门课程的学习，学生在日常生活中能够了解国内外时事发展，正确领悟国家发愿面临的形势变化，全面了解党和国家的路线方针政策。</span></span></span></p><p id="w-e-element-38" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-15" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">    2.能力目标:是指通过该门课程的学习，学生在日常学习和职业生涯规划中，能结合党和国家的路线方针政策</span></span></span></p><p id="w-e-element-39" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-17" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">实时指导和调整自己的学习和生活规划。3.素质目标:是指通过该门课程的学习，学生能够增强爱国主义精神，民族自亮感，承担起中华民族伟大复兴的重大责任。</span></span></span></p><p id="w-e-element-40" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-19" data-slate-node="text"><span data-slate-leaf="true"><strong class="token bold"><span data-slate-string="true">三、课程学习单元内容与要求</span></strong></span></span></p><p id="w-e-element-41" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-21" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">本课程教学内容通普国际国内政治、经济、文化、军享，外交，国际战略等各主题的重大发展形势与政策问题，具体教学内容参看每半年教育部社科司颁发的《“形势与政策”教育教受要点》。</span></span></span></p><p id="w-e-element-42" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-23" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">《注:高校形势与政策课程没有指定教材。教育部补科司每年分上半年、下半年两次下发教育教学要点，可作教</span></span></span></p><p id="w-e-element-43" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-25" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">学、学习参考。)</span></span></span></p><p id="w-e-element-44" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-27" data-slate-node="text"><span data-slate-leaf="true"><strong class="token bold"><span data-slate-string="true">四、课程考核与评价</span></strong></span></span></p><p id="w-e-element-45" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-29" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">本课程采用线上授课的教学模式，具体考核要求如下:学生季每学期观看教学视频和回复帖子，最后一学期参加期末考试，四个学期考核合格后总成结方能会</span></span></span></p><p id="w-e-element-114" data-slate-node="element"><span id="w-e-text-115" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">这</span></span></span></p><p id="w-e-element-32" data-slate-node="element" style="text-indent: 2em;"><span id="w-e-text-33" data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">汤过护四个学类的成终合成，今格后可整得木课程最终成结，1学分</span></span></span></p></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课程内容"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
        <el-tab-pane label="课程通知"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
        <el-tab-pane label="课程讨论"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
        <el-tab-pane label="课程答疑"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
        <el-tab-pane label="学习笔记"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
        <el-tab-pane label="学习统计"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
        <el-tab-pane label="课程评价"
          ><el-empty :image-size="200"></el-empty
        ></el-tab-pane>
      </el-tabs>
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
  name: 'detail',
  data() {
    return {
      search: ''
    }
  },
  methods: {},

  mounted() {}
}
</script>
<style lang="scss" scoped>
.pagewrap {
  overflow-x: hidden;
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
main {
  position: relative;
  .time {
    position: absolute;
    top: -150px;
    color: #f1f1f1;
    left: 1600px;
  }
  .tabs {
    ::v-deep {
      .el-tabs__item {
        font-size: 20px;
        color: #fff;
      }

      .el-tabs__header {
        position: absolute;
        top: -150px;
        width: 1000px;
        left: 405px;
      }
      .el-tabs__nav-wrap::after {
        display: none;
      }
      .el-tabs__active-bar {
        background: #fff;
      }
      .con {
        display: flex;
        .conl {
          background: #f4f7ff;
          flex: 0 0 300px;
          padding: 30px;
          box-sizing: border-box;
          .cover {
            text-align: center;
            img {
              width: 100%;
            }
            p {
              margin: 10px 0;
              font-size: 20px;
              font-weight: bold;
            }
          }
          .auther {
            margin-top: 30px;
            .teacher,
            .key {
              border-top: 1px dashed #254fbb;
              padding: 10px 0;
              span {
                font-weight: bold;
                color: #2c7bc2;
                display: inline-block;
                min-width: 100px;
              }
            }
            .tags {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              .el-tag{
                margin: 5px 5px 5px 0;
              }
            }
          }
        }
        .conr{
          background: #fff;
          padding: 30px 50px;
          box-sizing: border-box;
          .tit{
            font-size: 32px;
            font-weight: bold;
            color: #2c7bc2;
            margin-bottom: 30px;
            margin-top: 20px;
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
