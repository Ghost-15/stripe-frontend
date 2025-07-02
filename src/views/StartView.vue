<script>
</script>

<template>
  <div class="px-40 flex flex-1 justify-center py-5 bg-gradient-to-t from-gray-600 to-gray-900 to-50%">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="@container">
        <div class="@[480px]:p-4">
          <div
              class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvyL9qutewKr6veHJ47tZ4ojPIHVtp-2O00Asby4YH-mpXualqlxJvRnBkQ0UzicckwIYCNzxtHcsvlYt61aeeSjaBSKarddwVFoIXBcub5J2E91L_IvsUKwpqNMzawRgZ1lMeoVIG7JpXOMxk81qQvwyTKRW51Qpixlz62P2vE77F4bEIjElRSCPsLrVGTofjp7AAaMFNTseMaPeP5m2R1HY5MuRjELbSrtTj53E27fkq1O1PK8UUDn8Cwsy-H_buZglVbGQobgU");'
          >
            <div class="flex flex-col gap-2 text-left">
              <h1
                  class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Payments infrastructure for the internet
              </h1>
              <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Millions of companies of all sizes—from startups to Fortune 500s—use Acme Co's software and APIs to accept payments, send payouts, and manage their businesses
                online.
              </h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <router-link to="/login">
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#bdd2e9] text-[#14191f] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span class="truncate">Sigin</span>
                </button>
              </router-link>

              <router-link to="/abonnement">
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2b3540] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span class="truncate">Sigup</span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 px-4 py-10 @container">
        <div class="flex flex-col gap-4">
          <h1
              class="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Unified platform
          </h1>
          <p class="text-white text-base font-normal leading-normal max-w-[720px]">
            Acme Co is a complete payments platform with simple, pay-as-you-go pricing. Our products power payments for online and in-person retailers, subscription
            businesses, software platforms and marketplaces, and everything in between.
          </p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          <div class="flex flex-1 gap-3 rounded-lg border border-[#3d4c5c] bg-[#1f262e] p-4 flex-col">
            <div class="text-white" data-icon="CreditCard" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                    d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">Payments</h2>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">
                A complete payments platform engineered for growth. Startups to Fortune 500s use Acme Co's software and APIs to accept payments, send payouts, and manage
                their businesses online.
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-[#3d4c5c] bg-[#1f262e] p-4 flex-col">
            <div class="text-white" data-icon="CurrencyDollar" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                    d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">Billing</h2>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">Create and manage subscriptions, send invoices, and get paid.</p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-[#3d4c5c] bg-[#1f262e] p-4 flex-col">
            <div class="text-white" data-icon="ArrowsLeftRight" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                    d="M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">Connect</h2>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">
                A platform for marketplaces and platforms to pay sellers and service providers around the world.
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-[#3d4c5c] bg-[#1f262e] p-4 flex-col">
            <div class="text-white" data-icon="FileText" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-white text-base font-bold leading-tight">Invoicing</h2>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">Create and send invoices to customers globally.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 px-4 py-10 @container">
        <div class="flex flex-col gap-4">
          <h1
              class="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Get started in minutes
          </h1>
          <p class="text-white text-base font-normal leading-normal max-w-[720px]">
            Whether you're creating a new business or expanding an existing one, Acme Co products are designed to help you scale. We handle everything from subscriptions to
            payouts, and everything in between.
          </p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          <div class="flex flex-col gap-3 pb-3">
            <div
                class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDII0x9gm0dNnpxd_5l0A2wDByuL9AZKGIrlDdaktIxEPzjEJZ6YKbTEgey93EWhjO58R54nm2ItQOVJ0rJIWNIV5NiAKwMnaKk4PLPKr3ACCZzakrEJdUBU3b9-S96g60R5ReZ08ySxitcfLIH6hnkJPrYlFUNa1qqeWrJyf6-RG-d8eqSa6spqNiFv1rvl1c2OzD1imFsQ-nbVx1ebUPPlfDNpuHy6lG3WZ982O28hLagJ2a1r7PARG32TPgm6LQHFxwLl8lRnHc");'
            ></div>
            <div>
              <p class="text-white text-base font-medium leading-normal">Optimized checkout experience</p>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">
                Increase revenue with a checkout experience designed to convert. No code required, and easy to customize.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div
                class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi1u-sYZjFvK6LiL27XagZQOWzb-IPlkDsYVJJQwI4I4d1g582KqJE3aEUdclZ4FIBJ7stX19Ll3YZzOjjkoAFqxk2v2wx6g_Cmfhh5KNhHqnv_tGtlaq63vxzIC4ZyTY6bMPViRp1UlwUdVXHAfqRJFbMmSVHgKxKlwz926rUXLWCEYEGvs1GQ-xiHKeHDskSviJU5Vp5D4hkKe9NzYrChV3JeUn2GHGKkigQy5zElkYwFBGOz8ejRTJN9kGbfAUxWPpzPsj3w-Y");'
            ></div>
            <div>
              <p class="text-white text-base font-medium leading-normal">Powerful APIs</p>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">Use Acme Co's APIs to build custom payment flows for your online and in-person business.</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div
                class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAff9_IYL5GS49kDEDWfRnpkCHxIHAC_NS8Ttl4b_-PJnauGaO1uKREH7dpG_NeLEuskliJqXkihPIqJAvtfEoRPUVimNsDdYWtZY42iFLC1BZVk79J2FwL4-WHQrI4-slYZdItg-6Xpag8Vs37LRwgzNrDH1lvvLV52ASrxSJY--LP2txPavTr5XOaUuGMmTlB8XsvZUxZfi0cHVuNIYUr73IV2Vlv25S6Ne-JRz69etQeEtVqOU6gyjVJib8if9Ei85eCcezYxaM");'
            ></div>
            <div>
              <p class="text-white text-base font-medium leading-normal">Fastest way to start</p>
              <p class="text-[#9dadbe] text-sm font-normal leading-normal">Get up and running in minutes. No lengthy onboarding or monthly fees.</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3"><p class="text-[#9dadbe] text-sm font-normal leading-normal">Create and send invoices to customers globally.</p></div>
        </div>
      </div>
    </div>
  </div>
</template>