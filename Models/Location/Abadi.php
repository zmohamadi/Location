<?php

namespace Models\Location;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Abadi extends Model
{
    use Base;

    protected $table = 'location_abadi';
    protected $fillable = ['name', 'abadi_type', 'diag', 'ostan', 'shahrestan', 'bakhsh', 'dehestan', 'amar_code'];

    public function dehestan()
    {
        return $this->belongsTo(Dehestan::class, 'dehestan', 'id');
    }
}
