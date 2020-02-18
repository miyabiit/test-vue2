<template>
<div>

      <a class="side_menu mt-2" data-toggle="collapse" href="#side_navi" role="button" aria-expanded="true" aria-controls="side_navi"><i class="icon-search"></i> 特集から探す</a>
      <div id="side_navi" class="ccollapse">
        <router-link :to="{ name: 'list', params: {Id: 1}}">新入荷商品</router-link>
        <router-link :to="{ name: 'list', params: {Id: 2}}">おすすめ商品</router-link>
        <router-link :to="{ name: 'list', params: {Id: 3}}">災害支援商品</router-link>
      </div>
      
      <a class="side_menu mt-2" data-toggle="collapse" href="#accordion" role="button" aria-expanded="false" aria-controls="side_navi"><i class="icon-search"></i> 機種一覧から探す</a>
      <div id="accordion" class="collapse">
        <div class="card">
          <div class="card-body" id="heading-1">
              <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                掘削・運搬・解体・林業
              </a>
          </div>
          <div id="collapse-1" class="collapse" data-parent="#accordion" aria-labelledby="heading-1">
            <div class="card-body">
              <div id="accordion-1">
                <div class="card child">
                  <div class="card-body" id="heading-1-1">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                        掘削機械
                      </a>
                  </div>
                  <div id="collapse-1-1" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-1">
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー後方小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー後方小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー小旋回</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">バックホー配管仕様</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">クレーン機能付バックホー配管仕様</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">電動バックホー</a>
                    </div>
                  </div>
                  <div class="card-body" id="heading-1-2">
                      <a class="collapsed child" role="button" data-toggle="collapse" href="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                        運搬機械
                      </a>
                  </div>
                  <div id="collapse-1-2" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-2">
                    <div class="card">
                        <a href="product_list.html" class="product">ベルトコンベア</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">アルミコンベア</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ホイールローダ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">キャリアダンプ</a>
                    </div>
                  </div>
                  <div class="card-body" id="heading-1-3">
                      <a class="collapsed child" role="button" data-toggle="collapse" href="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                        解体機械
                      </a>
                  </div>
                  <div id="collapse-1-3" class="collapse" data-parent="#accordion-1" aria-labelledby="heading-1-3">
                    <div class="card">
                        <a href="product_list.html" class="product">解体ロングバックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">解体ショートリーチバックホー</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">解体用アタッチメント類</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">解体用搭乗式床材剥がし機</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ミニローダー</a>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
          <div class="card-body" id="heading-2">
              <a role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                レンタカー・車両機械
              </a>
          </div>
          <div id="collapse-2" class="collapse" data-parent="#accordion" aria-labelledby="heading-2">
            <div class="card-body">
              <div id="accordion-2">
                <div class="card child">
                  <div class="card-body" id="heading-2-1">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                        レンタカー
                      </a>
                  </div>
                  <div id="collapse-2-1" class="collapse" data-parent="#accordion-2" aria-labelledby="heading-2-1">
                    <div class="card">
                        <a href="product_list.html" class="product">2～4tダンプ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">三転ダンプ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">スライドダンプ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">2t・4tトラッククレーン付</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">2t・4tトラック</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">2tトラックリフトゲート付</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">軽ダンプ4WD・軽トラック</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ライトバン・軽バン</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">Wキャブトラック</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">1BOX</a>
                    </div>
                  </div>
                  <div class="card-body" id="heading-2-2">
                      <a class="collapsed" role="button" data-toggle="collapse" href="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                        車両関連機器
                      </a>
                  </div>
                  <div id="collapse-2-2" class="collapse" data-parent="#accordion-2" aria-labelledby="heading-2-2">
                    <div class="card">
                        <a href="product_list.html" class="product">カーナビ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">ドラレコ</a>
                    </div>
                    <div class="card">
                        <a href="product_list.html" class="product">トラックスケール ポータブル車両重量計</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="side_menu mt-2" data-toggle="collapse" href="#side_docs" role="button" aria-expanded="false" aria-controls="side_navi"><i class="icon-books"></i> 参考資料</a>
      <div id="side_docs" class="collapse">
        <a href="document/general-conditions/index.html">レンタル約款</a>
        <a href="document/rental-support/index.html">レンタル物件サポート特約制度</a>
        <a href="document/special-contract/index.html">レンタル保障制度</a>
        <a href="document/law/index.html">法規</a>
        <a href="document/qualification/index.html">資格</a>
        <a href="document/unit/index.html">単位</a>
        <a href="document/guide/index.html">ご利用ガイド</a>
      </div>
</div>
</template>
