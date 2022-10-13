<template>
  <div class="mount">
    <h1>會員身分說明</h1>
    <h2>各身分權限/說明</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">會員類別</th>
          <th scope="col">入會費 & 常年會費</th>
          <th scope="col">入會資格</th>
          <th scope="col">表決權/選舉權/被選舉權/罷免權</th>
        </tr>
      </thead>
      <tbody class="base">
        <tr v-for="(membership, index) of Memberships" :key="index">
          <td v-text="membership.type"></td>
          <td>
            {{ membership.joinMemberFee }}元 /
            {{ membership.AnnualMembershipFee }}元
          </td>
          <td v-text="membership.qualifications"></td>
          <td>
            <SvgIcon
              v-bind="
                membership.permission
                  ? { name: 'utils-check', color: '#0082ca' }
                  : { name: 'utils-uncheck', color: 'red' }
              "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
interface MembershipType {
  /** 會員類別 */
  type: '普通' | '學生' | '贊助' | '榮譽' | '團體';
  /** 入會資格 */
  qualifications: string;
  /** 入會費 */
  joinMemberFee: number;
  /** 常年會費 */
  AnnualMembershipFee: number;
  /** 權限 */
  permission: boolean;
}

const Memberships: MembershipType[] = [
  {
    type: '普通',
    qualifications: '設籍本市或本市工作者，年滿20歲',
    joinMemberFee: 100,
    AnnualMembershipFee: 500,
    permission: true,
  },
  {
    type: '學生',
    qualifications: '設籍本市之在學學生或於本市就學，年滿20歲',
    joinMemberFee: 100,
    AnnualMembershipFee: 100,
    permission: true,
  },
  {
    type: '贊助',
    qualifications: '設籍本市或本市工作者或就學，年滿20歲',
    joinMemberFee: 100,
    AnnualMembershipFee: 3000,
    permission: true,
  },
  {
    type: '普通',
    qualifications: '設籍本市或本市工作者，年滿20歲',
    joinMemberFee: 100,
    AnnualMembershipFee: 500,
    permission: true,
  },
  {
    type: '榮譽',
    qualifications: '對推廣人民教育與心理健康有卓越貢獻或熱心服務者',
    joinMemberFee: 0,
    AnnualMembershipFee: 0,
    permission: false,
  },
  {
    type: '團體',
    qualifications: '凡設籍本市，贊同本會宗旨之公私機構或團體',
    joinMemberFee: 100,
    AnnualMembershipFee: 8000,
    permission: true,
  },
];
</script>

<style lang="scss" scoped>
.mount {
  width: 80%;
  max-width: 1200px;
  text-align: center;
}

table {
  display: block;
  overflow-x: auto;
}

thead {
  background-color: #d3edfb;
}

tr {
  td,
  th {
    width: 100%;
    padding: 10px;
    font-size: 15pt;
    line-height: 2rem;
    white-space: nowrap;
    border-collapse: collapse;
    border-right: dashed #ebb77c;
    border-bottom: dashed #8b8f8f;

    &:nth-last-child(1) {
      border-right: initial;
    }
  }

  &:nth-last-child(1) td {
    border-bottom: initial;
  }
}

.base tr:nth-child(2n + 2) {
  background-color: #f7f7f7;
}

:global(#app-mount .content) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
