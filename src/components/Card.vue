<template>
      <div class="card shadow-sm">
        <router-link to="/Detail" class="img" :style="{backgroundImage: `url(${item.imgPath})`}"/>
        <div class="card-body">
          <p class="card-text">
            <router-link to="/Detail" style="text-decoration-line: none;" @click="itemId(item.id)">
                {{item.name}} &nbsp;
            </router-link>
            <span class="discount badge bg-danger">
            {{ item.discountPer }}%
            </span>
            <button class="real text-danger" @click="itemId(item.id)"></button>
          </p>

          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-primary" @click="addToCart(item.id)">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            <small class="price text-body-secondary">
            정가 {{ lib.getNumberFormatted(item.price) }}원
            </small>
            <small class="real text-danger">
            할인가 {{ lib.getNumberFormatted(item.price - (item.price * item.discountPer / 100)) }}원
            </small>
          </div>
        </div>
      </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";
import router from "@/scripts/router";

export default {
    name:"Card",
    props:{
        item: Object
    },
    setup() {
        const addToCart = (itemId) => {
            axios.post(`/api/cart/items/${itemId}`).then(() => {
                console.log('success');
                window.alert("장바구니에 추가되었습니다.");
            })
        };

        const itemId = (id) => {
            axios.get(`/api/items/${id}`).then(() => {
                console.log('success2');
                console.log(`${id}`);
                window.alert("이동");
                router.push({path: "/Detail"})
            })
        };

        return {lib, addToCart, itemId}
    }
}
</script>

<style scoped>
.card .img{
    display: inline-block;
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
}

.card .card-body .price {
    text-decoration: line-through;
}
</style>