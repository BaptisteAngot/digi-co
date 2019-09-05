<?php

$data = http_build_query(array(
  'secret' => "6LetxbYUAAAAAK2Hv_KUq0QYZlG_4S1u1twei2Sy",
  'response' => "03AOLTBLReNhdz3sTw46RKhiVHu-eLNtu0BvWybASGv1zT9AKzauZPP36zxmGIaapD3wIu9OkPKT5LcHDSZ_scwPfRaT6u9PlDz0gk_OnK8cema0_cOAsGaw7fcFMTQyj9v32talc9L8McnAVOPcNhP_dDpoNxETtAIXSFZOOegTFNYQPvZx6FfTe_Pv4CwRP08T2Cjq8n8KZyge9RMbUdJOYamo3OhuE-9IQ-G_GWj-04en-x3KTcNH7AWfzHRrEJnNT9uKbb5PY6ywtQlpbZ3YKq5HqvbOd1KMkDKgbUCeI5cK0pM3DWLDgBD2mdRGA28IukWSmy_Unn"
));

$curl = curl_init();

$captcha_verify_url = "https://www.google.com/recaptcha/api/siteverify";

curl_setopt($curl, CURLOPT_URL,$captcha_verify_url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);


$captcha_output = curl_exec ($curl);
curl_close ($curl);
$decoded_captcha = json_decode($captcha_output);

print_r($captcha_output);
