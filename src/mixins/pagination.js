export default {
    data(){
        return {
           
        }
    },
    methods: {
        gridSizeChange(page){
            this.filters.page=page;
        },
        gridCurrentChange(size){
            this.filters.size=size;
        }
    }
}