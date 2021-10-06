export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
            this.$bus.$on('setMainScroll', this.handleSetScroll);
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll')
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off('setMainScroll', this.handleSetScroll);
        },
        methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetScroll(scrollTop = 0) {
                this.$refs[refValue].scrollTop = scrollTop;
            }
        }
    }
}