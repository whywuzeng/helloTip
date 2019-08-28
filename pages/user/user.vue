<template>
    <view class="content">
		<uni-list v-if="hasLogin">
		   
		    <uni-list-item title="账号" show-badge="true" :badge-text="userName" badge-type = "default" show-arrow="false"></uni-list-item>
		    <uni-list-item title="供应商编码" show-badge="true" :badge-text="code" badge-type = "default" show-arrow="false"></uni-list-item>
		</uni-list> 
        <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
	import uniList from '../../components/uni-list/uni-list.vue'
	import uniListItem from '../../components/uni-list-item/uni-list-item.vue'

    export default {
		components: {uniList,uniListItem},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin','code','userName'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            }
        }
    }
</script>

<style>

</style>
