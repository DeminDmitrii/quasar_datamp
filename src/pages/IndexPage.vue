<template>
  <div v-if=$q.platform.is.desktop>
    <q-layout view="lHh Lpr lff">
      <q-drawer class="background"
                :width="288"
                v-model="desktopDrawer"
                show-if-above
                bordered>
        <div id="desktop-logo">
          <img src="src/assets/desktop-logo.svg" alt="desktop-logo">
        </div>
      </q-drawer>
      <q-header>
        <q-toolbar id="desktopHeader"></q-toolbar>
      </q-header>
      <q-page-container class="font">
        <q-page class="q-pa-md" style="background-color: #F9FAFB">
          <div class="font-h1">Личный кабинет</div>
          <div class="row q-mt-md">
            <q-card class="col card" flat>
              <q-card-section horizontal>
                <div class="col card-content-padding">
                  <div class="font-h3">Товаров</div>
                  <div class="font-h2">{{ info.products }}</div>
                </div>
                <div class="card-content-padding">
                  <img class="card-img-size" src="src/assets/product_img.svg" alt="product">
                </div>
              </q-card-section>
            </q-card>
            <q-card class="col card" flat>
              <q-card-section horizontal>
                <div class="col card-content-padding">
                  <div class="font-h3">Каталогов</div>
                  <div class="font-h2">{{ info.catalogs }}</div>
                </div>
                <div class="card-content-padding">
                  <img class="card-img-size" src="src/assets/catalog_img.svg" alt="catalog">
                </div>
              </q-card-section>
            </q-card>
            <q-card class="col card" flat>
              <q-card-section horizontal>
                <div class="col card-content-padding">
                  <div class="font-h3">Брендов</div>
                  <div class="font-h2">{{ info.brands }}</div>
                </div>
                <div class="card-content-padding">
                  <img class="card-img-size" src="src/assets/brand_img.svg" alt="brand">
                </div>
              </q-card-section>
            </q-card>
            <q-card class="col card" flat style="margin-right: 0">
              <q-card-section horizontal>
                <div class="col card-content-padding">
                  <div class="font-h3">Продавцов</div>
                  <div class="font-h2">{{ info.sellers }}</div>
                </div>
                <div class="card-content-padding">
                  <img class="card-img-size" src="src/assets/sellers_img.svg" alt="sellers">
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="row">
            <q-card class="col echarts-card" flat>
              <q-card-section>
                <div class="font-h2">Продажи по дням</div>
                <div class="echarts" id="day-sales-id"></div>
              </q-card-section>
            </q-card>
            <q-card class="col echarts-card" flat style="margin-right: 0">
              <q-card-section>
                <div class="font-h2">Продажи по месяцам</div>
                <div class="echarts" id="month-sales-id"></div>
              </q-card-section>
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
  <div v-if=$q.platform.is.mobile>
    <q-layout
      view="hhh LpR lff"
      container
      style="height: 100vh;"
    >
      <q-header style="background: #310062">
        <q-toolbar class="q-px-none">
          <q-btn id="header" flat @click="drawerLeft = !drawerLeft">
            <img class="img" src="src/assets/menu.svg" alt="menu">
          </q-btn>
          <q-toolbar-title>
            <img id="logo" src="src/assets/Logo.svg" alt="logo">
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container class="font" style="background-color: #F9FAFB;">
        <q-page class="q-pa-md font-h1">
          <p>Личный кабинет</p>
          <div class="row">
            <div class="col">
              <q-card class="q-px-md q-pt-md q-pb-sm q-mr-sm q-mb-sm card-mobile " flat>
                <div>
                  <img class="img" src="src/assets/product_mobile.svg" alt="product">
                  <div class="font-h3">Товаров</div>
                  <div class="font-h2">{{ info.products }}</div>
                </div>
              </q-card>
            </div>
            <div class="col">
              <q-card class="q-px-md q-pt-md q-pb-sm q-ml-sm q-mb-sm card-mobile" flat>
                <div>
                  <img class="img" src="src/assets/catalogs_mobile.svg" alt="catalogs">
                  <div class="font-h3">Каталогов</div>
                  <div class="font-h2">{{ info.catalogs }}</div>
                </div>
              </q-card>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-card class="q-px-md q-pt-md q-pb-sm q-mr-sm q-mt-sm card-mobile" flat>
                <div>
                  <img class="img" src="src/assets/brands_mobile.svg" alt="brands">
                  <div class="font-h3">Брендов</div>
                  <div class="font-h2">{{ info.brands }}</div>
                </div>
              </q-card>
            </div>
            <div class="col">
              <q-card class="q-px-md q-pt-md q-pb-sm q-ml-sm q-mt-sm card-mobile" flat>
                <div>
                  <img class="img" src="src/assets/sellers_mobile.svg" alt="sellers">
                  <div class="font-h3">Продавцов</div>
                  <div class="font-h2">{{ info.sellers }}</div>
                </div>
              </q-card>
            </div>
          </div>
          <q-card class="q-px-md q-pt-md q-pb-sm q-mt-md card-mobile" flat>
            <div class="font-h2" style="display: inline-block">Продажи по&nbsp;</div>
            <q-select id="select" borderless v-model="selectedOption" :options="options"
                      style="display: inline-block;"/>
            <q-card-section class="q-pa-none">
              <div class="echarts-mobile" id="day-sales-id"></div>
            </q-card-section>
          </q-card>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useQuasar} from "quasar";
import * as echarts from "echarts"
import {useDaySalesStore} from "stores/daySales";

const $q = useQuasar()

$q.platform.is.mobile = false;
$q.platform.is.desktop = true;

const desktopDrawer = ref(false);
const drawerLeft = ref(false);
const info = ref({products: "14 360 601", catalogs: "3069", brands: "352 335", sellers: "47 246"});

const options = ["дням", "месяцам"];
const selectedOption = ref(options[0]);

async function api() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Array.from({length: 7}, () => Math.random() * 300));
    }, 1000);
  });
}

onMounted(async () => {
    const store = useDaySalesStore();
    store.daySales = await api();

    echarts.init(document.getElementById("day-sales-id")).setOption({
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: store.daySales,
          type: "line",
          areaStyle: {
            opacity: 0.3
          }
        }
      ]
    });

    const monthSalesElement = document.getElementById("month-sales-id");
    if (monthSalesElement) {
      echarts.init(monthSalesElement).setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330],
            type: "line",
            areaStyle: {
              opacity: 0.3
            }
          }
        ]
      });
    }
  }
)
</script>
