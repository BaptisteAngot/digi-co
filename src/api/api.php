<?php

  public function contact()
  {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
      header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

      $formdata = json_decode(file_get_contents('php://input'), true);

      if( ! empty($formdata)) {

          $prenom = $formdata['prenom'];
          $nom = $formdata['nom'];
          $mail = $formdata['mail'];
          $societe = $formdata['societe'];
          $message = $formdata['message'];

          $contactData = array(
              'prenom' => $prenom,
              'name' => $nom,
              'mail' => $mail,
              'societe' => $societe,
              'message' => $message,
          );

          $id = $this->api_model->insert_contact($contactData);

          $this->sendemail($contactData);

          $response = array('id' => $id);
      }
      else {
          $response = array('id' => '');
      }

      $this->output
          ->set_content_type('application/json')
          ->set_output(json_encode($response));
  }

  public function sendemail($contactData)
  {
      $message = '<p>Hi, <br />Some one has submitted contact form.</p>';
      $message .= '<p><strong>Prenom: </strong>'.$contactData['prenom'].'</p>';
      $message .= '<p><strong>Name: </strong>'.$contactData['name'].'</p>';
      $message .= '<p><strong>Email: </strong>'.$contactData['mail'].'</p>';
      $message .= '<p><strong>Société: </strong>'.$contactData['societe'].'</p>';
      $message .= '<p><strong>Name: </strong>'.$contactData['message'].'</p>';
      $message .= '<br />Thanks';

      $this->load->library('email');

      $config['protocol'] = 'sendmail';
      $config['mailpath'] = '/usr/sbin/sendmail';
      $config['charset'] = 'iso-8859-1';
      $config['wordwrap'] = TRUE;
      $config['mailtype'] = 'html';

      $this->email->initialize($config);

      $this->email->from("contact@digiandco.com");
      $this->email->to('deshais.armand@gmail.com');

      $this->email->subject('Contact Form');
      $this->email->message($message);

      $this->email->send();
  }
?>
