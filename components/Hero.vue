<template>
  <div class="hero-main">
        <div class="news-highlight">
            <div class="news-highlight-container">
                <NuxtLink :to="`/news/${highlight[0]?.id}`" class="highlight-container">
                    <div class="highlight-content">
                        <p class="highlight-header">{{highlight[0]?.title}}</p>
                        <p class="news-category">Travel Lifestyle</p>
                        <p class="news-content">{{highlight[0]?.description}}</p>
                    </div>
                    <div class="image-wrapper">
                        <div class="image-zoom">
                            <div class="highlight-image-content">
                                <img :src="highlight[0]?.thumbnail" alt="news-image">
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="news-header">
            <div class="news-tranding-header">
                <p>TERPOPULER</p>
                <hr>
            </div>
            <div class="news-tranding-container">
                <div class="news-tranding-card">
                    <div class="list-number">1</div>
                    <div class="news-tranding-content">
                        <div class="news-tranding-title">
                            KPK Minta Maaf ke Rombongan TNI, Akui Khilaf soal Kasus Suap Basarnas
                        </div>
                        <div class="news-category">Nasional</div>
                    </div>
                </div>
                <div class="news-tranding-card">
                    <div class="list-number">2</div>
                    <div class="news-tranding-content">
                        <div class="news-tranding-title">
                            Nusron Wahid Usul Golkar Calonkan RK atau Gibran: Airlangga Tak Mutlak
                        </div>
                        <div class="news-category">Nasional</div>
                    </div>
                </div>
                <div class="news-tranding-card">
                    <div class="list-number">3</div>
                    <div class="news-tranding-content">
                        <div class="news-tranding-title">
                            Hasil SEA V League: Indonesia Menang Dramatis Atas Vietnam
                        </div>
                        <div class="news-category">Olahraga</div>
                    </div>
                </div>
                <div class="news-tranding-card">
                    <div class="list-number">4</div>
                    <div class="news-tranding-content">
                        <div class="news-tranding-title">
                            Puspom Sampaikan Keberatan Sebelum KPK Umumkan Kabasarnas Tersangka
                        </div>
                        <div class="news-category">Nasional</div>
                    </div>
                </div>
                <div class="news-tranding-card">
                    <div class="list-number">5</div>
                    <div class="news-tranding-content">
                        <div class="news-tranding-title">
                            Alasan KPK Minta Maaf ke Rombongan TNI: Tim Penyelidik Khilaf
                        </div>
                        <div class="news-category">Nasional</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: ['highlight']
}
</script>

<style>

</style>