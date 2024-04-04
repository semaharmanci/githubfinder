export class Github {
  constructor() {
    this.client_id = "ce984aa2886238edc6ca";
    this.client_secret = "22d9af4545e2eb3f65ff015aaf320e38b63b1f0f";
    this.per_page = 10;
    this.sort = "asc";
  }
  //* api den kullancii bilgisi alma
  async fetchUserData(username) {
    // parametre olarak gelen kullanıcı adına göre istek atmak
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //kullanici repolarini almak icin istek atmak
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
    );
  
    //*apiden aldigimiz cevabi json a cevirdik
    const data = await profileRes.json();
    const repos = await repoRes.json();
    
    //*fonksiyon cagrildigi yere bilgi gonderme
    return { data , repos };
  }
}
