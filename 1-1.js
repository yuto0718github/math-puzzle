// 怪文判定用関数：与えられた文字列が回文なら true を返す
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// 指定した上限値までのうち、10進数と2進数で回文となる数の配列として返す
function findDualPalindromes(limit) {
    const palindromes = [];
    for (let i = 1; i < limit; i++) {
        const decStr = i.toString();
        const octStr = i.toString(8);
        const binStr = i.toString(2); 
        if (isPalindrome(decStr) && isPalindrome(octStr) && isPalindrome(binStr)) {
            palindromes.push(i);
        }
    }
    const smallestPalindromes = [];
    palindromes.forEach(num => {
        if (num >= 10) {
            smallestPalindromes.push(num);
        } 
    });
    
    const answer = Math.min(...smallestPalindromes)
    console.log(answer)
}

findDualPalindromes(1000);
