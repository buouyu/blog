<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{data.githubName}}</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{data.qq}}</span>
        <div class="pop">
          <img
            :src="data.qqQrCode"
            alt=""
          />
        </div>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>{{data.weixin}}</span>
        <div class="pop">
          <img
            :src="data.weixinQrCode"
            alt=""
          />
        </div>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mailTo}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{data.mail}}</span>
        <div class="pop">
          <img
            :src="data.weixinQrCode"
            alt=""
          />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from 'vuex';
export default {
  components: {
    Icon,
  },
  computed:mapState('setting',['data'])
};
</script>

<style lang="less" scoped>
@import url('~@/styles/mixin.less');
.contact-container {
  list-style: none;
  padding: 0;
  li {
    padding: 5px 20px;
    a {
      display: flex;
      text-decoration: none;
      color: #333;
      position: relative;
      .icon {
        padding: 0 10px 0 0;
        font-size: 24px;
      }
      span {
        font-size: 16px;
        transform: translateY(5px);
      }
      &:hover {
        color: aquamarine;
      }
      &:hover .pop{
          transform: scale(1);

      }
      .pop{
          position:absolute;
          height: 150px;
          width:150px;
          top:-153px;
          background-color: #fff;
          border-radius: 10px;
          transition: all .5s;
          transform-origin: center bottom;
          transform: scale(0);
          img{
              .self-center();
              height: 135px;
              width: 135px;
              object-fit: cover;
          }
          &::after{
              content:'';
              position: absolute;
              height: 14px;
              width:14px;
              background-color: #fff;
              left:70px;
              bottom: -7px;
              transform: rotate(45deg);
          }
      }
    }
  }
}
</style>