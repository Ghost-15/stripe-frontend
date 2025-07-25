<script setup>

import Sidebar from "../components/SideBar.vue";
import { useAuthStore } from "../stores/useAuthStore.js";
const authStore = useAuthStore()

 
</script>

<template>
  <Sidebar />
  <div class="flex-1">
      <div class="sm:mx-auto sm:max-w-3xl">

        <div class="flex flex-wrap justify-between gap-3 p-4">
          <div class="flex min-w-72 flex-col gap-3">
            <p class="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Overview</p>
            <p class="text-[#60748a] text-sm font-normal leading-normal">View a summary of your business</p>
          </div>
        </div>

        <section class="bg-[#E0E0E0] rounded-[59px] p-[168px] gap-10 z-30 shadow-2xl">
        </section>

        <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent transactions</h2>
        <div class="px-4 py-3 @container">
          <div class="flex overflow-hidden rounded-lg border border-[#dbe0e6] bg-white">
            <table class="flex-1">
              <thead>
              <tr class="bg-white">
                <th class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-120 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Date</th>
                <th class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-240 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
                  Description
                </th>
                <th class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-360 px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">Amount</th>
                <th class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-480 px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">Status</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-t border-t-[#dbe0e6]">
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-120 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  2023-08-15
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  Payment from Sarah Johnson
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">$100</td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full"
                  >
                    <span class="truncate">Success</span>
                  </button>
                </td>
              </tr>
              <tr class="border-t border-t-[#dbe0e6]">
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-120 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  2023-08-14
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  Refund to David Lee
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">-$50</td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full"
                  >
                    <span class="truncate">Refunded</span>
                  </button>
                </td>
              </tr>
              <tr class="border-t border-t-[#dbe0e6]">
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-120 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  2023-08-13
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  Payment from Emily Chen
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">$75</td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full"
                  >
                    <span class="truncate">Success</span>
                  </button>
                </td>
              </tr>
              <tr class="border-t border-t-[#dbe0e6]">
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-120 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  2023-08-12
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  Payment from Michael Brown
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">$200</td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full"
                  >
                    <span class="truncate">Success</span>
                  </button>
                </td>
              </tr>
              <tr class="border-t border-t-[#dbe0e6]">
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-120 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  2023-08-11
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-240 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">
                  Payment from Jessica Wilson
                </td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-360 h-[72px] px-4 py-2 w-[400px] text-[#60748a] text-sm font-normal leading-normal">$150</td>
                <td class="table-e69692dc-75bb-4836-be7f-fd56995323eb-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button
                      class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-full"
                  >
                    <span class="truncate">Success</span>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>